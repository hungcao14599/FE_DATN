import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SettingOutlined } from "@ant-design/icons";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchChatsByUserId } from "../../actions/chat";

export default function ChatLeft() {
  const URL_IMAGE_USERS = "http://localhost:3000/api/users/image";
  const dispatch = useDispatch();
  const params = useParams();
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

  const chats = useSelector(
    (state) => state.chat.fetchChatsByUserId.result.data
  );

  useEffect(() => {
    dispatch(fetchChatsByUserId(20, 1, keyword));
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
              {chats?.data.map((item, i) => {
                return (
                  <Link to={`/tlu/messages/${item.id}`}>
                    <ProfileGroup
                      style={{
                        background: item.id === +params.id ? "#f5e3e7" : "",
                        borderRadius: item.id === +params.id ? "8px" : "",
                      }}
                    >
                      <GroupImg>
                        <img
                          src={`${URL_IMAGE_USERS}/${
                            item.type !== 1
                              ? item.image
                              : item.member_chats[0].user.avatar
                          }`}
                          alt=""
                        />
                      </GroupImg>

                      <GroupName>
                        <Name>
                          {item.type !== 1
                            ? item.name
                            : item.member_chats[0].user.username}
                        </Name>
                        <Des>{`${item.member_chats[0].user.firstname} ${item.member_chats[0].user.lastname}`}</Des>
                      </GroupName>
                    </ProfileGroup>
                  </Link>
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
    border-radius: 50%;
    object-fit: cover;
  }
`;

const GroupName = styled.div`
  padding: 0 10px;
`;

const ProfileGroup = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 7px;
  :hover {
    background: #f2f2f2;
    border-radius: 8px;
  }
`;

const Des = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
  color: #ca0533;
`;

const Users = styled.div`
  height: 645px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
