import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button, Tabs } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  approvalFriend,
  fetchAllFriendOfUserById,
  fetchAllNotFriendOfUserById,
  fetchAllUserApprovalById,
} from "../../actions/friend";
import MakeFriends from "./MakeFriends";

export default function FriendLeft() {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";

  const dispatch = useDispatch();
  const friends = useSelector(
    (state) => state.friend.fetchAllFriendOfUserById.result.data
  );

  const friendApproval = useSelector(
    (state) => state.friend.fetchAllUserApprovalById.result.data
  );

  const notFriends = useSelector(
    (state) => state.friend.fetchAllNotFriendOfUserById.result.data
  );

  const [keyword, setSearch] = useState("");
  const [keyword1, setSearch1] = useState("");
  const [keyword2, setSearch2] = useState("");
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

  const { TabPane } = Tabs;

  const callback = (key) => {
    if (+key === 1) {
      dispatch(fetchAllFriendOfUserById(20, 1, keyword));
    } else if (+key === 2) {
      dispatch(fetchAllUserApprovalById(20, 1, keyword1));
    } else if (+key === 3) {
      dispatch(fetchAllNotFriendOfUserById(20, 1, keyword2));
    } else {
    }
  };

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1, keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch(fetchAllUserApprovalById(20, 1, keyword1));
  }, [dispatch, keyword1]);

  useEffect(() => {
    dispatch(fetchAllNotFriendOfUserById(20, 1, keyword2));
  }, [dispatch, keyword2]);

  const handleApprovalFriend = (id) => {
    dispatch(approvalFriend(id, true));
  };
  const handleUnApprovalFriend = (id) => {
    dispatch(approvalFriend(id, false));
  };

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <TitleGroup>
            <Title>Người dùng</Title>
            <SettingOutlined />
          </TitleGroup>

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Bạn bè" key="1">
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

              <GroupJoined>
                {/*  */}
                <Groups>
                  {friends?.data.map((item, i) => {
                    return (
                      <ProfileGroup>
                        <GroupImg>
                          <img
                            src={`${URL_IMAGE_USER}/${item.user_friend.avatar}`}
                            alt=""
                          />
                        </GroupImg>

                        <GroupName>
                          <Name>
                            <Link
                              to={`/tlu/profile/${item.user_friend.username}`}
                            >
                              {item.user_friend.username}
                            </Link>
                          </Name>
                          <Des>{item.user_friend.description}</Des>
                        </GroupName>
                      </ProfileGroup>
                    );
                  })}
                </Groups>
              </GroupJoined>
            </TabPane>
            <TabPane tab="Lời mời kết bạn" key="2">
              <SearchGroup>
                <SearchInput
                  imgSearch={imgSearch}
                  value={keyword1}
                  onChange={setSearch1}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  isBlur={isBlur}
                  // setSearch={setSearch}
                />
              </SearchGroup>
              <GroupJoined>
                <Groups>
                  {friendApproval?.data.map((item, i) => {
                    return (
                      <ApprovalFriend>
                        <ProfileGroup>
                          <GroupImg>
                            <img
                              src={`${URL_IMAGE_USER}/${item.user_friend.avatar}`}
                              alt=""
                            />
                          </GroupImg>

                          <GroupName>
                            <Name>
                              <Link
                                to={`/tlu/profile/${item.user_friend.username}`}
                              >
                                {item.user_friend.username}
                              </Link>
                            </Name>
                            <Des>{item.user_friend.description}</Des>
                          </GroupName>
                        </ProfileGroup>

                        <ButtonControl>
                          <ButtonConfirm
                            type="default"
                            size="large"
                            icon={<CheckCircleOutlined />}
                            onClick={() =>
                              handleApprovalFriend(item.user_friend.id)
                            }
                          >
                            Accept
                          </ButtonConfirm>

                          <ButtonConfirm
                            type="default"
                            size="large"
                            icon={<CloseCircleOutlined />}
                            onClick={() =>
                              handleUnApprovalFriend(item.user_friend.id)
                            }
                          >
                            Decline
                          </ButtonConfirm>
                        </ButtonControl>
                      </ApprovalFriend>
                    );
                  })}
                </Groups>
              </GroupJoined>
            </TabPane>

            <TabPane tab="Người dùng khác" key="3">
              <SearchGroup>
                <SearchInput
                  imgSearch={imgSearch}
                  value={keyword2}
                  onChange={setSearch2}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  isBlur={isBlur}
                  // setSearch={setSearch}
                />
              </SearchGroup>
              <GroupJoined>
                <Groups>
                  {notFriends?.data.map((item, i) => {
                    return <MakeFriends item={item} />;
                  })}
                </Groups>
              </GroupJoined>
            </TabPane>
          </Tabs>
        </Left1>
      </Col1>
    </WrapperCol1>
  );
}

const ApprovalFriend = styled.div`
  display: flex;
`;
const ButtonControl = styled.div`
  margin-top: 20px;
  flex: 1;
  display: flex;
`;

const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  margin-left: 20px;
  display: flex;
  align-items: center;

  span {
    margin: 0 auto;
    font-size: 13px;
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
  a {
    color: #ca0533;
  }
`;

const Groups = styled.div`
  height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const GroupJoined = styled.div``;

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
