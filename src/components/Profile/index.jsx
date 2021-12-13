import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import Header from "../Header";
import PersonalInfomation from "./PersonalInformation";
import PersonalImage from "./PersonalImage";
import PostForm from "../Post/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByName } from "../../actions/user";
import PostList from "../Post/PostList";
import { fetchAllPostsByUserName } from "../../actions/post";
import { useParams } from "react-router-dom";
import PersonalFriend from "./PersonalFriend";
import { fetchAllFriendOfUserById } from "../../actions/friend";

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
  padding: 0px 280px;
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

  useEffect(() => {
    dispatch(fetchUserByName(params.username));
  }, [dispatch, params.username]);

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1));
  }, [dispatch]);

  const postsByUsername = useSelector(
    (state) => state.post.fetchAllPostsByUserName.result
  );
  const profile = useSelector((state) => state.user.fetchUserByID.result);
  const personalInfo = useSelector(
    (state) => state.user.fetchUserByName.result
  );

  const listFriend = useSelector(
    (state) => state.friend.fetchAllFriendOfUserById.result.data
  );

  return (
    <Wrapper>
      <Container>
        <Header profile={profile?.data} />
        <ProfileHeader profile={personalInfo?.data} />
        <ProfileContent>
          <ContentInfo>
            <PersonalInfomation profile={personalInfo?.data} />
            <PersonalImage />
            <PersonalFriend personalInfo={personalInfo?.data} />
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
