import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import Header from "../Header";
import PersonalInfomation from "./PersonalInformation";
import PostForm from "../Post/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../actions/user";
import PostList from "../Post/PostList";
import { fetchAllPostsByUserName, fetchPostByPostId } from "../../actions/post";
import { useParams } from "react-router-dom";

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
const ProfileContent = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 120px;
`;

const ContentInfo = styled.div``;
const ContentPost = styled.div`
  width: 100%;
  margin-left: 20px;
`;
export default function Profile() {
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
    dispatch(fetchAllPostsByUserName(params.username, 20, 1));
  }, [dispatch, params.username]);

  const postsByUsername = useSelector(
    (state) => state.post.fetchAllPostsByUserName.result
  );

  return (
    <Wrapper>
      <Container>
        <Header />
        <ProfileHeader />
        <ProfileContent>
          <ContentInfo>
            <PersonalInfomation />
            <PersonalInfomation />
            <PersonalInfomation />
          </ContentInfo>
          <ContentPost>
            <PostForm />
            <PostList items={postsByUsername?.data} />
          </ContentPost>
        </ProfileContent>
      </Container>
    </Wrapper>
  );
}
