import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Header from "../Header";
import MainContent from "../MainContent";
import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Contents>
          <SidebarLeft />

          <MainContent />

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
`;

const Contents = styled.div`
  /* display: grid;
  grid-template-columns: 0.5fr 1fr 0.6fr; */

  display: flex;

  justify-content: space-between;

  grid-gap: 30px;
  padding-top: 14px;
`;
