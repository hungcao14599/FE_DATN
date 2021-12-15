import {
  HistoryOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";

const Wrapper = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 20px;
  min-width: 300px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
const Title = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const Des = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`;
const Body = styled.div``;
const BodyContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`;
const Logo = styled.div`
  margin-right: 20px;
`;
const Info = styled.span`
  margin-left: 5px;
  font-weight: 400;
`;
const Content = styled.span`
  font-weight: 600;
`;
export default function GroupIntroduce({ membersInGroup }) {
  const groupByID = useSelector((state) => state.group.fetchGroupById.result);

  return (
    <Wrapper>
      <Header>
        <Title>Giới thiệu về nhóm này</Title>
      </Header>
      <Des>{groupByID?.data.caption}</Des>
      <Body>
        <BodyContent>
          <Logo>
            <UsergroupAddOutlined />
          </Logo>
          <Content>{`${membersInGroup.length} Members`}</Content>
        </BodyContent>
        <BodyContent>
          <Logo>
            <UserOutlined />
          </Logo>

          <Content>
            Admin
            <Info>{`${membersInGroup[0].user.firstname} ${membersInGroup[0].user.lastname} (${membersInGroup[0].user.username})`}</Info>
          </Content>
        </BodyContent>
        <BodyContent>
          <Logo>
            <HistoryOutlined />
          </Logo>
          <Content>
            History
            <Info>
              {`Nhóm đã được tạo vào ${formatDateOfBirth(
                groupByID?.data.createdAt.slice(0, 10)
              )}`}
            </Info>
          </Content>
        </BodyContent>
      </Body>
    </Wrapper>
  );
}
