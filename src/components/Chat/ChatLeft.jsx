import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SettingOutlined } from "@ant-design/icons";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllFriendOfUserById } from "../../actions/friend";

export default function ChatLeft() {
  const URL_IMAGE_POSTS = "http://localhost:3000/api/posts/image";
  const dispatch = useDispatch();

  const [keyword, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const onBlur = () => {
    setIsFocus(false);
    setIsBlur(true);
  };
  const onFocus = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const friends = useSelector(
    (state) => state.friend.fetchAllFriendOfUserById.result.data
  );

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1, keyword));
  }, [dispatch, keyword]);

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <TitleGroup>
            <Title>Messages</Title>
            <SettingOutlined />
          </TitleGroup>

          <SearchGroup>
            <SearchInput
              imgSearch={imgSearch}
              value={keyword}
              onChange={setSearch}
              onBlur={onBlur}
              onFocus={onFocus}
              isBlur={isBlur}
              // setSearch={setSearch}
            />
          </SearchGroup>

          <UsersJoined>
            <Title>Users</Title>
            <Users>
              {friends?.data.map((item, i) => {
                return (
                  <ProfileGroup>
                    <GroupImg>
                      <img
                        src={`${URL_IMAGE_POSTS}/${item.user_friend.avatar}`}
                        alt=""
                      />
                    </GroupImg>

                    <GroupName>
                      <Name>
                        <Link to={`/tlu/group/${item.user_friend.id}`}>
                          {item.user_friend.username}
                        </Link>
                      </Name>
                      <Des>{item.user_friend.description}</Des>
                    </GroupName>
                  </ProfileGroup>
                );
              })}
            </Users>
          </UsersJoined>
        </Left1>
      </Col1>
    </WrapperCol1>
  );
}

const GroupImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    object-fit: cover;
  }
`;

const GroupName = styled.div`
  padding: 0 10px;
`;

const ProfileGroup = styled.div`
  display: flex;
  padding: 20px 0px;
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

const Users = styled.div`
  height: auto;
`;
const UsersJoined = styled.div``;

const SearchGroup = styled.div`
  margin: 10px auto;
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
const Col1 = styled.div``;
