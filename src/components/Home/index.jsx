import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserById } from "../../actions/user";
import Header from "../Header";
import MainContent from "../MainContent";
import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";

export default function Home() {
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
          <SidebarLeft profile={profile} />
          <MainContent profile={profile} />
          <SidebarRight />
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
`;

const Contents = styled.div`
  /* display: grid;
  grid-template-columns: 0.5fr 1fr 0.6fr; */

  display: flex;

  justify-content: space-between;

  grid-gap: 30px;
  padding-top: 14px;
`;
