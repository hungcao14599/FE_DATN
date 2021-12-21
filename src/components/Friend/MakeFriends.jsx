import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend } from "../../actions/friend";

export default function MakeFriends({ item }) {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";

  const dispatch = useDispatch();
  const [isFriendRequest, setIsFriendRequest] = useState(false);

  const handleMakeFriend = (id) => {
    setIsFriendRequest(true);
    dispatch(addFriend(id));
  };

  return (
    <OtherUser>
      <ProfileGroup>
        <GroupImg>
          <img src={`${URL_IMAGE_USER}/${item.avatar}`} alt="" />
        </GroupImg>

        <GroupName>
          <Name>
            <Link to={`/tlu/profile/${item.username}`}>{item.username}</Link>
          </Name>
          <Des>{item.description}</Des>
        </GroupName>
      </ProfileGroup>
      <ButtonMakeFriend
        type="default"
        size="large"
        icon={<UserAddOutlined />}
        onClick={() => handleMakeFriend(item.id)}
      >
        {isFriendRequest ? "Sent A Friend Request" : "Make Friend"}
      </ButtonMakeFriend>
    </OtherUser>
  );
}

const OtherUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ButtonMakeFriend = styled(Button)`
  background: #ca0533;
  color: white;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
  }
  :hover,
  :active,
  :focus {
    background: #ca0533;
    color: white;
  }
`;

const GroupImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const GroupName = styled.div`
  padding: 0 10px;
`;

const ProfileGroup = styled.div`
  display: flex;
  padding: 20px 0px;
  width: 300px;
`;

const Des = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
  a {
    color: #ca0533;
  }
`;
