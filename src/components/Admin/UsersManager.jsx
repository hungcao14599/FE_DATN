import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Tabs } from "antd";
import UsersTable from "./UsersTable";
import { fetchAllUsers } from "../../actions/user";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";
import UsersStatistical from "./UsersStatistical";
import ExportCSV from "./ExcelExport";

export default function UsersManager() {
  const URL_IMAGE_USERS = "http://localhost:3000/api/users/image";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.fetchAllUsers.result.data);
  console.log(
    "🚀 ~ file: UsersManager.jsx ~ line 22 ~ UsersManager ~ users",
    users
  );

  // eslint-disable-next-line array-callback-return
  const data = users?.data.slice(1).map((item, i) => {
    if (item.roles[0].role_name === "USER") {
      return {
        // key: i + 1,
        userID: item?.id,
        avatar: (
          <Link to={`/tlu/profile/${item?.username}`}>
            <Img src={`${URL_IMAGE_USERS}/${item.avatar}`} alt="" />
          </Link>
        ),
        username: item?.username,
        fullname: item.firstname ? `${item.firstname} ${item.lastname}` : "---",
        email: item?.email,
        gender: item.gender ? (+item.gender === 1 ? "Male" : "Female") : "---",
        birthday: item.birthday ? formatDateOfBirth(item?.birthday) : "---",
        address: item.address ? item.address : "---",
        phone: item.phone ? item.phone : "---",
        status: item.status,
        createdAt: item.createdAt,
      };
    }
  });

  const { TabPane } = Tabs;

  const callback = (key) => {};

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Users" key="1">
              <ExportCSV csvData={data} fileName={'ExportCSV'}/>
              <UsersTable data={data} totalElements={users?.totalElements} />
            </TabPane>
            <TabPane tab="Statistical" key="2">
              <UsersStatistical totalElements={users?.totalElements} />
            </TabPane>
          </Tabs>
        </Left1>
      </Col1>
    </WrapperCol1>
  );
}

const WrapperCol1 = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Left1 = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 15px;
`;
const Col1 = styled.div``;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
