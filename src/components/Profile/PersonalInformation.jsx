import {
  CalendarOutlined,
  GlobalOutlined,
  HomeOutlined,
  PhoneOutlined,
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
  padding: 15px;
  min-width: 300px;
  margin-bottom: 30px;
`;
const Header = styled.div``;
const Title = styled.span`
  color: red;
  font-size: 18px;
  font-weight: 700;
`;
const Des = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
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
  font-weight: bold;
  margin-left: 5px;
`;
const Content = styled.span``;
export default function PersonalInfomation() {
  const profile = useSelector((state) => state.user.fetchUserByID.result.data);

  return (
    <Wrapper>
      <Header>
        <Title>Giới thiệu</Title>
        <Des>{profile?.description}</Des>
      </Header>
      <Body>
        <BodyContent>
          <Logo>
            <HomeOutlined />
          </Logo>
          <Content>
            Sống tại
            <Info>{`${profile?.address}`}</Info>
          </Content>
        </BodyContent>
        <BodyContent>
          <Logo>
            <GlobalOutlined />
          </Logo>

          <Content>
            Đến từ
            <Info>{`${profile?.address}`}</Info>
          </Content>
        </BodyContent>
        <BodyContent>
          <Logo>
            <CalendarOutlined />
          </Logo>
          <Content>
            Ngày sinh
            <Info>{formatDateOfBirth(`${profile?.birthday}`)}</Info>
          </Content>
        </BodyContent>
        <BodyContent>
          <Logo>
            <PhoneOutlined />
          </Logo>
          <Content>
            Số điện thoại
            <Info>{`${profile?.phone}`}</Info>
          </Content>
        </BodyContent>
      </Body>
    </Wrapper>
  );
}
