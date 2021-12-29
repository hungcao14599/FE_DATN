import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { fetchAllGroups } from "../../actions/group";
import GroupsTable from "./GroupsTable";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";

export default function GroupsManager() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGroups());
  }, [dispatch]);

  const groups = useSelector((state) => state.group.fetchAllGroups.result.data);

  // eslint-disable-next-line array-callback-return
  const data = groups?.data.map((item, i) => {
    return {
      key: i + 1,
      groupID: item.id,
      name: item.name,
      description: item.description,
      caption: item.caption,
      createdAt: formatDateOfBirth(item.createdAt.slice(0, 10)),
    };
  });

  const { TabPane } = Tabs;

  const callback = (key) => {};

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Groups" key="1">
              <GroupsTable data={data} />
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
