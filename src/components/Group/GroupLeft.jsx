import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button, Modal, Tabs } from "antd";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";
import { CreateGroup } from "./CreateGroup";
import { useDispatch } from "react-redux";
import { fetchGroupsOfUser } from "../../actions/group";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GroupMemberJoin from "./GroupMemberJoin";

export default function GroupLeft() {
  const URL_IMAGE_POSTS = "http://localhost:3000/api/posts/image";

  const [isShow, setIsShow] = useState(false);

  const handleShowAddGroup = () => {
    setIsShow(!isShow);
  };

  const handleOk = () => {
    setIsShow(false);
  };

  const handleCancel = () => {
    setIsShow(false);
  };
  const dispatch = useDispatch();
  const groups = useSelector(
    (state) => state.group.fetchGroupsOfUser.result.data
  );

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

  useEffect(() => {
    dispatch(fetchGroupsOfUser({ size: 20, page: 1, keyword: keyword }));
  }, [dispatch, keyword]);

  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  };

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <TitleGroup>
            <Title>Groups</Title>
            <SettingOutlined />
          </TitleGroup>

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Group Joined" key="1">
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
                <ButtonAddGroup>
                  <ButtonConfirm
                    type="default"
                    size="large"
                    icon={<PlusOutlined />}
                    onClick={handleShowAddGroup}
                  >
                    Create A New Group
                  </ButtonConfirm>
                </ButtonAddGroup>
              </SearchGroup>

              <GroupJoined>
                <Title>Group Joined</Title>
                <Groups>
                  {groups?.data.map((item, i) => {
                    return (
                      <ProfileGroup>
                        <GroupImg>
                          <img
                            src={`https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?size=626&ext=jpg`}
                            alt=""
                          />
                        </GroupImg>

                        <GroupName>
                          <Name>
                            <Link to={`/tlu/group/${item.id}`}>
                              {item.name}
                            </Link>
                          </Name>
                          <Des>{item.description}</Des>
                        </GroupName>
                      </ProfileGroup>
                    );
                  })}
                </Groups>
              </GroupJoined>
            </TabPane>
            <TabPane tab="Member Join" key="2">
              <GroupJoined>
                <Title>Group Joined</Title>
                <Groups>
                  {groups?.data.map((item, i) => {
                    return <GroupMemberJoin item={item} />;
                  })}
                </Groups>
              </GroupJoined>
            </TabPane>
          </Tabs>
        </Left1>
      </Col1>

      <Modal
        title="Basic Modal"
        visible={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreateGroup />
      </Modal>
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

const Groups = styled.div`
  height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const GroupJoined = styled.div``;
const ButtonAddGroup = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ebedf3;
`;
const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  margin-top: 30px;
  font-weight: 500;
  border-radius: 8px;
  width: 100%;

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
  /* padding: 0 0 0 50px; */
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
