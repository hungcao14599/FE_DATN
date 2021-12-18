import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button, Modal } from "antd";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";
import { CreateGroup } from "./CreateGroup";
import { useDispatch } from "react-redux";
import { fetchOtherGroupsOfUser, userJoinGroup } from "../../actions/group";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function GroupRight() {
  const URL_IMAGE_POSTS = "http://localhost:3000/api/posts/image";
  const [isShow, setIsShow] = useState(false);
  const [keyword, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const handleOk = () => {
    setIsShow(false);
  };
  const handleCancel = () => {
    setIsShow(false);
  };
  const dispatch = useDispatch();
  const groups = useSelector(
    (state) => state.group.fetchOtherGroupsOfUser.result.data
  );
  const onBlur = () => {
    setIsFocus(false);
    setIsBlur(true);
  };
  const onFocus = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  useEffect(() => {
    dispatch(fetchOtherGroupsOfUser({ size: 20, page: 1, keyword: keyword }));
  }, [dispatch, keyword]);

  const handleJoinGroup = (id) => {
    dispatch(userJoinGroup(id));
  };

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <TitleGroup>
            <Title>Groups</Title>
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
            />
          </SearchGroup>

          <GroupOther>
            <Title>Group Other</Title>
            <Groups>
              {groups?.data.map((item, i) => {
                return (
                  <ProfileGroup>
                    <InfoGroup>
                      <GroupImg>
                        <img src={`${URL_IMAGE_POSTS}/${item.avatar}`} alt="" />
                      </GroupImg>

                      <GroupName>
                        <Name>
                          <Link to={`/tlu/group/${item.id}`}>{item.name}</Link>
                        </Name>
                        <Des>{item.description}</Des>
                      </GroupName>
                    </InfoGroup>
                    <div>
                      <ButtonConfirm
                        type="default"
                        size="large"
                        icon={<PlusOutlined />}
                        onClick={() => handleJoinGroup(item.id)}
                      >
                        Join
                      </ButtonConfirm>
                    </div>
                  </ProfileGroup>
                );
              })}
            </Groups>
          </GroupOther>
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
const InfoGroup = styled.div`
  display: flex;
  align-items: center;
`;
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
  padding: 5px 0px;
  justify-content: space-between;
  align-items: flex-end;
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
const GroupOther = styled.div``;

const SearchGroup = styled.div`
  margin: 10px auto;
  border-bottom: 1px solid #ebedf3;
  border-top: 1px solid #ebedf3;
  padding: 15px 0px;
`;
const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 10px;
`;
const Col1 = styled.div``;

const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  margin-top: 30px;
  font-weight: 500;
  border-radius: 8px;

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
