import React, { useEffect } from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ContactsOutlined,
  ProfileOutlined,
  UserOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGroupsOfUser } from "../../actions/group";

const { Sider } = Layout;

export default function SidebarLeft({ profile }) {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";
  const URL_IMAGE_POST = "http://localhost:3000/api/posts/image";

  const dispatch = useDispatch();
  const groups = useSelector(
    (state) => state.group.fetchGroupsOfUser.result.data
  );

  useEffect(() => {
    dispatch(fetchGroupsOfUser({ size: 20, page: 1, keyword: "" }));
  }, [dispatch]);

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <ProfileInfo>
            <ProfileImg>
              <img src={`${URL_IMAGE_USER}/${profile?.avatar}`} alt="" />
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
          <Sider className="site-layout-background">
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
              <Menu.Item key="4" icon={<ProfileOutlined />}>
                <Link to={`/tlu/home`}>News Feed </Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to={`/tlu/profile/${profile?.username}`}>Profile </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<GroupOutlined />}>
                <Link to={`/tlu/groups`}>Groups</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </Left2>

        <WrapInvitation>
          <Invitation>INVITATIONS</Invitation>
        </WrapInvitation>
        <Left3>
          <GroupJoined>
            <Title>Group Joined</Title>
            <Groups>
              {groups?.data.map((item, i) => {
                return (
                  <ProfileGroup>
                    <GroupImg>
                      <img src={`${URL_IMAGE_POST}/${item.avatar}`} alt="" />
                    </GroupImg>

                    <GroupName>
                      <NameG>
                        <Link to={`/tlu/group/${item.id}`}>{item.name}</Link>
                      </NameG>
                      <Des>{item.description}</Des>
                    </GroupName>
                  </ProfileGroup>
                );
              })}
            </Groups>
          </GroupJoined>
        </Left3>
      </Col1>
    </WrapperCol1>
  );
}

const Des = styled.div`
  color: #767676;
`;

const NameG = styled.div`
  font-weight: 700;
  a {
    color: #ca0533;
  }
`;

const GroupName = styled.div`
  padding: 0 10px;
`;

const ProfileGroup = styled.div`
  display: flex;
  padding: 20px 0px;
`;

const GroupImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    object-fit: cover;
  }
`;

const GroupJoined = styled.div`
  padding: 15px;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const Groups = styled.div`
  height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WrapInvitation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Nickname = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
`;

const WrapperCol1 = styled.div`
  /* padding: 0 0 0 50px; */
  flex-basis: 350px;
`;

const Invitation = styled.div`
  margin-top: 20px;
  font-weight: 700;
  color: #767676;
`;

const Left3 = styled.div`
  background: white;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;

const ProfileImg = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileName = styled.div`
  padding: 0 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  padding: 20px 15px;
`;
const Left2 = styled.div`
  margin-top: 25px;
  background: white;
  width: auto;
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
const Col1 = styled.div`
  position: sticky;
  top: 0;
`;
