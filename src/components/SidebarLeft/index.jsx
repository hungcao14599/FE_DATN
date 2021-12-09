import React, { useEffect } from "react";
import styled from "styled-components";
import Avatar from "./../../assets/img/avatar.jpeg";
import Ads from "./../../assets/img/ads.jpg";
import { Button, Layout, Menu } from "antd";
import {
  HomeOutlined,
  ContactsOutlined,
  FileImageOutlined,
  ProfileOutlined,
  UserOutlined,
  SettingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../actions/user";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function SidebarLeft({ profile }) {
  return (
    <div>
      <WrapperCol1>
        <Col1>
          <Left1>
            <ProfileInfo>
              <ProfileImg>
                <img src={profile ? profile.avatar : ""} alt="" />
              </ProfileImg>

              <ProfileName>
                <Name>{profile ? profile.username : ""}</Name>
                <Nickname>{`${profile ? profile.firstname : ""} ${
                  profile ? profile.lastname : ""
                }`}</Nickname>
              </ProfileName>
            </ProfileInfo>
          </Left1>
          <Left2>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                  borderRadius: 10,
                  padding: "5px 0px",
                }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to={`/tlu/home`}>Home </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ContactsOutlined />}>
                  People
                </Menu.Item>
                <Menu.Item key="3" icon={<FileImageOutlined />}>
                  Photos
                </Menu.Item>
                <Menu.Item key="4" icon={<ProfileOutlined />}>
                  <Link to={`/tlu/home`}>News Feed </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                  <Link to={`/tlu/profile/${profile?.username}`}>Profile </Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<SettingOutlined />}>
                  Settings
                </Menu.Item>
              </Menu>
            </Sider>
          </Left2>

          <WrapInvitation>
            <Invitation>INVITATIONS</Invitation>
          </WrapInvitation>
          <Left3>
            <ImgAds>
              <img
                src={Ads}
                alt=""
                width="170px"
                height="300px"
                style={{ objectFit: "cover" }}
              />

              <AvatarImg>
                <img
                  src={Avatar}
                  alt=""
                  width="30px"
                  height="30px"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </AvatarImg>
              <ButtonControl>
                <ButtonAccept>
                  <Button>Accept Invitation</Button>
                </ButtonAccept>
                <BtnAdsSearch>
                  <Button icon={<CloseOutlined />} />
                </BtnAdsSearch>
              </ButtonControl>
            </ImgAds>
          </Left3>
        </Col1>
      </WrapperCol1>
    </div>
  );
}

const WrapInvitation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nickname = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
`;
const ButtonControl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const BtnAdsSearch = styled.div`
  button {
    border-radius: 5px;
  }
`;
const ButtonAccept = styled.div`
  /* position: absolute; */
  bottom: 10px;
  button {
    background: #ca0533;
    border-radius: 5px;
    span {
      font-size: 12px;
      color: #fff;
    }
    :hover,
    :active,
    :focus {
      background: #ca0533;
    }
  }
`;

const AvatarImg = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const ImgAds = styled.div`
  margin-top: 10px;
  padding: 15px;
  position: relative;
`;

const WrapperCol1 = styled.div`
  /* padding: 0 0 0 50px; */
`;

const Invitation = styled.div`
  margin-top: 20px;
  font-weight: 700;
  color: #767676;
`;

const Left3 = styled.div`
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;

const ProfileImg = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const ProfileName = styled.div`
  padding: 0 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  padding: 20px 13px;
`;
const Left2 = styled.div`
  margin-top: 25px;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;
const Left1 = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;
const Col1 = styled.div``;
