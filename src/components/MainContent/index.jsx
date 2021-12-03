import { Menu } from "antd";
import React, { useEffect, useState } from "react";
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
      name: "Nguyễn Tuấn Minh",
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
      name: "Nguyễn Tuấn Minh",
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
      name: "Nguyễn Tuấn Minh",
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
      name: "Nguyễn Tuấn Minh",
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
      name: "Nguyễn Tuấn Minh",
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
  function handleMenuClick(e) {
    console.log("click", e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts(20, 1));
  }, [dispatch]);

  const data = useSelector((state) => state.post.fetchAllPosts.result.data);

  // const [search, setSearch] = useState();
  return (
    <WrappStory>
      <Story items={items} />

      <SearchBar>
        <PostForm />
      </SearchBar>
      <PostList items={data} />
    </WrappStory>
  );
}

// const DropBtn = styled.div``;

// const Name = styled.div`
//   font-weight: 700;
// `;

// const ContactName = styled.div`
//   display: flex;
//   padding: 10px 10px;
// `;

// const ContactImg = styled.div`
//   padding: 7px 0;
// `;

// const WrapContact = styled.div`
//   display: flex;
// `;

// const ContactInfo = styled.div`
//   padding: 20px 18px 20px;
// `;

// const Right3 = styled.div`
//   margin-top: 20px;
//   width: 1105px;
//   margin-left: 8px;
//   background: white;
//   height: auto;
//   border-radius: 10px;
// `;

// const ButtonAdd = styled.div`
//   z-index: 10;
//   margin-left: 10px;
// `;

const SearchBar = styled.div`
  margin-top: 30px;
`;

// const AvatarImg = styled.div`
//   position: absolute;
//   top: 30px;
//   left: 22px;
// `;
// const AdsText = styled.div`
//   position: absolute;
//   bottom: 10px;
//   color: white;
//   font-weight: 700;
//   left: 25px;
// `;

// const ImgAds = styled.div`
//   margin-top: 10px;
//   position: relative;
// `;

// const Left3 = styled.div`
//   width: fit-content;
//   height: auto;
//   border-radius: 10px;
//   padding: 0 10px;
// `;

const WrappStory = styled.div``;
