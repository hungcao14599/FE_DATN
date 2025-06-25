import React, { useEffect } from "react";
import styled from "styled-components";
import Avatar from "../../assets/img/viethung.jpg";
import Story1 from "../../assets/img/story1.jpg";
import Story2 from "../../assets/img/story2.jpg";
import Story3 from "../../assets/img/story3.jpg";
import Story4 from "../../assets/img/story4.jpg";
import Story5 from "../../assets/img/story5.jpg";
import Story6 from "../../assets/img/story6.jpg";

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
          src={Story1}
          alt=""
          width="140px"
          height="210px"
          style={{ objectFit: "cover", borderRadius: "10px", opacity: 0.8 }}
        />
      ),
      // name: "Việt Hưng",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="35px"
          height="35px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Story2}
          alt=""
          width="140px"
          height="210px"
          style={{ objectFit: "cover", borderRadius: "10px", opacity: 0.8 }}
        />
      ),
      // name: "Việt Hưng",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="35px"
          height="35px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Story3}
          alt=""
          width="140px"
          height="210px"
          style={{ objectFit: "cover", borderRadius: "10px", opacity: 0.8 }}
        />
      ),
      // name: "Việt Hưng",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="35px"
          height="35px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Story4}
          alt=""
          width="140px"
          height="210px"
          style={{ objectFit: "cover", borderRadius: "10px", opacity: 0.8 }}
        />
      ),
      // name: "Việt Hưng",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="35px"
          height="35px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Story6}
          alt=""
          width="140px"
          height="210px"
          style={{ objectFit: "cover", borderRadius: "10px", opacity: 0.8 }}
        />
      ),
      // name: "Việt Hưng",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="35px"
          height="35px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Story5}
          alt=""
          width="140px"
          height="210px"
          style={{ objectFit: "cover", borderRadius: "10px", opacity: 0.8 }}
        />
      ),
      // name: "Việt Hưng",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="35px"
          height="35px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
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
  padding: 0 25px;
`;
