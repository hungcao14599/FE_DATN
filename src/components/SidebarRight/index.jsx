import React, { useEffect } from "react";
import styled from "styled-components";
import { Dropdown, Menu } from "antd";
import FriendRequest from "./FriendRequest";
import { useDispatch } from "react-redux";
import {
  fetchAllFriendOfUserById,
  fetchAllUserApprovalById,
} from "../../actions/friend";
import { useSelector } from "react-redux";

export default function SidebarRight() {
  const dispatch = useDispatch();
  const items = useSelector(
    (state) => state.friend.fetchAllFriendOfUserById.result.data
  );
  const approval = useSelector(
    (state) => state.friend.fetchAllUserApprovalById.result.data
  );

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllUserApprovalById(20, 1));
  }, [dispatch]);

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

  const URL = "http://localhost:3000/api/users/image";

  return (
    <WrapperCol3>
      <WrapTitle>
        <WrapDes>REQUEST</WrapDes>
      </WrapTitle>
      {(approval ? approval.data : []).map((item, i) => {
        return <FriendRequest data={item} key={i} />;
      })}

      <WrapTitle>
        <WrapDes>CONTACT</WrapDes>
        <FriendCount>{items ? items.data.length : ""}</FriendCount>
      </WrapTitle>
      <Right3>
        <ContactInfo>
          {(items ? items.data : []).map((item, i) => (
            <>
              <WrapContact>
                <ContactImg>
                  <img src={`${URL}/${item.user_friend.avatar}`} alt="" />
                  <Name>{item.user_friend.username}</Name>
                </ContactImg>
                <ContactName>
                  <Dropdown.Button overlay={menu}></Dropdown.Button>
                </ContactName>
              </WrapContact>
            </>
          ))}
        </ContactInfo>
      </Right3>
    </WrapperCol3>
  );
}

const FriendCount = styled.span`
  color: #fff;
  background: #767676;
  padding: 3px 10px;
  border-radius: 18px;
  font-weight: 600;
  font-size: 13px;
`;

const WrapContact = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;
const WrapTitle = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WrapDes = styled.span`
  font-weight: 600;
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ContactName = styled.div`
  display: flex;
  padding: 5px 0 5px 10px;
`;

const ContactImg = styled.div`
  padding: 7px 0;
  display: flex;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ContactInfo = styled.div`
  display: block;
  padding: 15px;
`;

const Right3 = styled.div`
  float: right;
  background: white;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;

const WrapperCol3 = styled.div``;
