import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchUserById } from "../../actions/user";
import Header from "../Header";
import AdminSideBar from "./AdminSideBar";
import GroupsManager from "./GroupsManager";
import PostsManager from "./PostsManager";
import UsersManager from "./UsersManager";

export default function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);
  const profile = useSelector((state) => state.user.fetchUserByID.result.data);

  const params = useParams();
  console.log("🚀 ~ file: index.jsx ~ line 18 ~ Admin ~ params", params);
  return (
    <Wrapper>
      <Container>
        <Header profile={profile} />
        <Contents>
          <AdminSideBar />
          {params.obj === "users" ? (
            <UsersManager />
          ) : params.obj === "posts" ? (
            <PostsManager />
          ) : params.obj === "groups" ? (
            <GroupsManager />
          ) : (
            ""
          )}
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
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
`;
