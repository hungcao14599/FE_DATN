import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import UsersTable from "./UsersTable";
import { fetchAllUsers } from "../../actions/user";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";

export default function UsersManager() {
  const URL_IMAGE_USERS = "http://localhost:3000/api/users/image";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.fetchAllUsers.result.data);

  // eslint-disable-next-line array-callback-return
  const data = users?.data.slice(1).map((item, i) => {
    if (item.roles[0].role_name === "USER") {
      return {
        key: i + 1,
        userID: item?.id,
        avatar: <Img src={`${URL_IMAGE_USERS}/${item.avatar}`} alt="" />,
        username: (
          <Name>
            <Link to={`/tlu/profile/${item?.username}`}>{item?.username}</Link>
          </Name>
        ),
        fullname: `${item.firstname} ${item.lastname}`,
        email: item?.email,
        gender: +item.gender === 1 ? "Male" : "Female",
        birthday: formatDateOfBirth(item?.birthday),
        address: item?.address,
        phone: item.phone,
        status: item.status,
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
              <UsersTable data={data} totalElements={users?.totalElements} />
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

const Name = styled.span`
  a {
    color: #ca0533;
  }
`;
