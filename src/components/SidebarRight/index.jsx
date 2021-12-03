import React from "react";
import styled from "styled-components";
import { Dropdown, Menu } from "antd";
import Avatar from "./../../assets/img/avatar.jpeg";
import FriendRequest from "./FriendRequest";

export default function SidebarRight() {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  const items = [
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
  ];
  return (
    <WrapperCol3>
      <WrapTitle>
        <WrapDes>REQUEST</WrapDes>
      </WrapTitle>
      <FriendRequest />
      <WrapTitle>
        <WrapDes>CONTACT</WrapDes>
      </WrapTitle>
      <Right3>
        <ContactInfo>
          {items.map((item, i) => (
            <>
              <WrapContact>
                <ContactImg>{item.img}</ContactImg>
                <ContactName>
                  <Name>{item.name}</Name>
                  <DropBtn>{item.dropbtn}</DropBtn>
                </ContactName>
              </WrapContact>
            </>
          ))}
        </ContactInfo>
      </Right3>
    </WrapperCol3>
  );
}

const WrapContact = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;
const WrapTitle = styled.div`
  margin-bottom: 15px;
`;
const WrapDes = styled.span`
  margin-bottom: 20px;
  font-weight: 600;
  color: #767676;
`;

const DropBtn = styled.div``;

const Name = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const ContactName = styled.div`
  display: flex;
  padding: 5px 0 5px 10px;
`;

const ContactImg = styled.div`
  padding: 7px 0;
`;

const ContactInfo = styled.div`
  display: block;
  padding: 15px;
`;

const Right3 = styled.div`
  float: right;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;

const WrapperCol3 = styled.div``;
