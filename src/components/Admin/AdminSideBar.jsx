import React from "react";
import styled from "styled-components";

import {
  FileDoneOutlined,
  GroupOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";

export default function AdminSideBar() {
  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <TitleGroup>
            <Title>Management</Title>
            <SettingOutlined />
          </TitleGroup>

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
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to={`/tlu/admin/users`}>Users</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileDoneOutlined />}>
                  <Link to={`/tlu/admin/posts`}>Posts</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<GroupOutlined />}>
                  <Link to={`/tlu/admin/groups`}>Groups</Link>
                </Menu.Item>
              </Menu>
            </Sider>
          </Left2>
        </Left1>
      </Col1>
    </WrapperCol1>
  );
}

const Left2 = styled.div`
  margin-top: 25px;
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;
const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 15px;
  align-items: center;
`;
const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const WrapperCol1 = styled.div`
  flex-basis: 350px;
`;

const Left1 = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 15px;
`;
const Col1 = styled.div`
  position: sticky;
  top: 0;
`;
