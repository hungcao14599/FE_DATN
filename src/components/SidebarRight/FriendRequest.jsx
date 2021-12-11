import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { approvalFriend } from "../../actions/friend";

export default function FriendRequest({ data }) {
  const dispatch = useDispatch();
  const URL = "http://localhost:3000/api/users/image";

  const handleApprovalFriend = () => {
    dispatch(approvalFriend(data.user_friend.id, true));
  };
  const handleUnApprovalFriend = () => {
    dispatch(approvalFriend(data.user_friend.id, false));
  };
  return (
    <WrapFriendRequest>
      <WrapProfileInfo>
        <ProfileImg>
          <img src={`${URL}/${data.user_friend.avatar}`} alt="" />
        </ProfileImg>
        <ProfileName>
          <Name>{data.user_friend.username}</Name>
          <Des>{data.user_friend.description}</Des>
        </ProfileName>
      </WrapProfileInfo>
      <WrapBtn>
        <Button
          type="primary"
          style={{ background: "#ca0533" }}
          onClick={handleApprovalFriend}
        >
          Accept
        </Button>
        <Button type="outlined" onClick={handleUnApprovalFriend}>
          Decline
        </Button>
      </WrapBtn>
    </WrapFriendRequest>
  );
}

const WrapFriendRequest = styled.div`
  background: #fff;
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
    margin: 5px;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const WrapProfileInfo = styled.div`
  display: flex;
  padding: 10px;
`;
