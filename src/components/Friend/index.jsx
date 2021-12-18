import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserById } from "../../actions/user";
import Header from "../Header";
import FriendLeft from "./FriendLeft";

export default function Friends() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  const profile = useSelector((state) => state.user.fetchUserByID.result.data);
  return (
    <Wrapper>
      <Container>
        <Header profile={profile} />
        <Contents>
          <FriendLeft />
        </Contents>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 20px;
  height: auto;
  background: #fff;
`;

const Container = styled.div`
  padding: 20px;
  background: #f9fafb;
  border-radius: 15px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  height: 100vh;
`;

const Contents = styled.div`
  padding-top: 14px; ;
`;
