import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";
import { fetchMemberInGroup } from "../../actions/group";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 20px;
  min-width: 300px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
const Title = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const Des = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`;
const Body = styled.div`
  padding: 15px 0px;
  input {
    width: 100%;
  }
`;

export default function Members() {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";
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

  const membersInGroup = useSelector(
    (state) => state.group.fetchMemberInGroup.result.data
  );

  useEffect(() => {
    dispatch(
      fetchMemberInGroup({
        groupID: params.id,
        size: 20,
        page: 1,
        keyword: keyword,
      })
    );
  }, [dispatch, keyword, params.id]);

  return (
    <Wrapper>
      <Header>
        <Title>Members.</Title>
        <Body>
          <SearchInput
            imgSearch={imgSearch}
            value={keyword}
            onChange={setSearch}
            onBlur={onBlur}
            onFocus={onFocus}
            isBlur={isBlur}
          />
          {membersInGroup?.data.map((item, i) => {
            return (
              <ProfileInfo>
                <ProfileImg>
                  <img src={`${URL_IMAGE_USER}/${item.user.avatar}`} alt="" />
                </ProfileImg>
                <ProfileName>
                  <Name>{`${item.user.firstname} ${item.user.lastname}`} </Name>
                  <Nickname>{item.user.username}</Nickname>
                </ProfileName>
              </ProfileInfo>
            );
          })}
        </Body>
      </Header>
    </Wrapper>
  );
}

const Nickname = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
`;

const ProfileImg = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileName = styled.div`
  padding: 0 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  padding: 20px 15px;
`;
