import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import Avatar from "./../../assets/img/avatar.jpeg";

export default function FriendRequest() {
  return (
    <WrapFriendRequest>
      <WrapProfileInfo>
        <ProfileImg>
          <img src={Avatar} alt="" />
        </ProfileImg>
        <ProfileName>
          <Name>Alexandra Borke</Name>
          <Des>wants to add you to friends</Des>
        </ProfileName>
      </WrapProfileInfo>
      <WrapBtn>
        <Button type="primary" style={{ background: "#ca0533" }}>
          Accept
        </Button>
        <Button type="outlined">Decline</Button>
      </WrapBtn>
    </WrapFriendRequest>
  );
}

const WrapFriendRequest = styled.div`
  float: right;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  margin-bottom: 20px;
  padding: 5px;
`;
const WrapBtn = styled.div`
  display: flex;
  padding: 0px 10px 10px;
  justify-content: space-between;
  button {
    border-radius: 5px;
    span {
      padding: 0 10px;
    }
  }
`;

const Des = styled.p`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 5px;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

const ProfileName = styled.div`
  padding: 0 10px;
`;

const ProfileImg = styled.div`
  img {
    width: 35px;
    height: 40px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const WrapProfileInfo = styled.div`
  display: flex;
  padding: 10px;
`;
