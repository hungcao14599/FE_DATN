import React, { useEffect } from "react";
import styled from "styled-components";
import Avatar from "../../assets/img/avatar.jpeg";
import Ads from "../../assets/img/ads.jpg";
import Story from "../Story";
import PostForm from "../Post/PostForm";
import PostList from "../Post/PostList";
import { fetchAllPosts } from "../../actions/post";
import { useDispatch, useSelector } from "react-redux";
export default function MainContent() {
  const items = [
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Hưng Cao",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Hưng Cao",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Hưng Cao",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Hưng Cao",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Hưng Cao",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
  ];

  const allPosts = useSelector((state) => state.post.fetchAllPosts.result.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts(20, 1));
  }, [dispatch]);
  return (
    <WrappStory>
      <Story items={items} />
      <SearchBar>
        <PostForm />
      </SearchBar>
      <PostList items={allPosts} />
    </WrappStory>
  );
}

const SearchBar = styled.div`
  margin-top: 30px;
`;

const WrappStory = styled.div`
  width: min-content;
`;
