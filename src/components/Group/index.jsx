import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserById } from "../../actions/user";
import Header from "../Header";
import GroupLeft from "./GroupLeft";
import GroupRight from "./GroupRight";
import PostList from "../Post/PostList";
import { fetchAllPostsInGroup } from "../../actions/post";
export default function Groups() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  const allPosts = useSelector(
    (state) => state.post.fetchAllPostsInGroup.result.data
  );

  useEffect(() => {
    dispatch(fetchAllPostsInGroup(20, 1));
  }, [dispatch]);

  const profile = useSelector((state) => state.user.fetchUserByID.result?.data);
  return (
    <Wrapper>
      <Container>
        <Header profile={profile} />
        <Contents>
          <GroupLeft />
          <List>
            <PostList items={allPosts} />
          </List>
          <GroupRight />
        </Contents>
      </Container>
    </Wrapper>
  );
}
const List = styled.div`
  width: 800px;
`;
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
  height: auto;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px; ;
`;
