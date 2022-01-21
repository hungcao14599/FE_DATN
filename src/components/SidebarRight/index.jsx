import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FriendRequest from "./FriendRequest";
import { useDispatch } from "react-redux";
import {
  fetchAllFriendOfUserById,
  fetchAllUserApprovalById,
} from "../../actions/friend";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchChatsByUserId } from "../../actions/chat";
import SearchInput from "../SearchInput";
import imgSearch from "../../assets/svg/search_icon.svg";

export default function SidebarRight() {
  const dispatch = useDispatch();
  const [keyword, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const items = useSelector(
    (state) => state.friend.fetchAllFriendOfUserById.result.data
  );
  const approval = useSelector(
    (state) => state.friend.fetchAllUserApprovalById.result.data
  );

  const chats = useSelector(
    (state) => state.chat.fetchChatsByUserId.result.data
  );

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1, ""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllUserApprovalById(20, 1, ""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchChatsByUserId(20, 1, keyword));
  }, [dispatch, keyword]);

  const onBlur = () => {
    setIsFocus(false);
    setIsBlur(true);
  };
  const onFocus = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const URL = "http://localhost:3000/api/users/image";

  return (
    <WrapperCol3>
      <Col3>
        <WrapTitle>
          <WrapDes>YÊU CẦU</WrapDes>
          <FriendCount>{approval ? approval.data.length : ""}</FriendCount>
        </WrapTitle>
        {(approval ? approval.data : []).map((item, i) => {
          return <FriendRequest data={item} key={i} />;
        })}

        <WrapTitle>
          <WrapDes>LIÊN HỆ</WrapDes>
          <FriendCount>{items ? items.data.length : ""}</FriendCount>
        </WrapTitle>
        <Right3>
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
          <ContactInfo>
            {(chats ? chats.data : []).map((item, i) => (
              <>
                <WrapContact>
                  <ContactImg>
                    <img
                      src={`${URL}/${item.member_chats[0].user.avatar}`}
                      alt=""
                    />
                    <Name>
                      <Link to={`/tlu/messages/${item.id}`}>
                        {item.member_chats[0].user.username}
                      </Link>
                    </Name>
                  </ContactImg>
                </WrapContact>
              </>
            ))}
          </ContactInfo>
        </Right3>
      </Col3>
    </WrapperCol3>
  );
}

const SearchGroup = styled.div`
  margin: 10px auto;
  padding: 0 10px 10px;
  border-bottom: 1px solid #ebedf3;
`;

const Col3 = styled.div`
  position: sticky;
  top: 0;
`;

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
  a {
    color: #082850;
  }
`;

const ContactImg = styled.div`
  padding: 7px;
  display: flex;
  width: 100%;
  :hover {
    background: #f2f2f2;
    border-radius: 8px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ContactInfo = styled.div`
  display: block;
  padding: 0 15px 15px 15px;
  height: 435px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Right3 = styled.div`
  float: right;
  background: white;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;

const WrapperCol3 = styled.div`
  flex-basis: 350px;
`;
