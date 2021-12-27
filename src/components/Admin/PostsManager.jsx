import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { fetchAllPostsRoleAdmin } from "../../actions/post";
import PostUsersTable from "./PostUsersTable";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";

export default function PostsManager() {
  const URL_IMAGE_POSTS = "http://localhost:3000/api/posts/image";
  const URL_IMAGE_USERS = "http://localhost:3000/api/users/image";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostsRoleAdmin());
  }, [dispatch]);

  const posts = useSelector(
    (state) => state.post.fetchAllPostsRoleAdmin.result.data
  );

  const data = posts?.data.map((item, i) => {
    return {
      key: i + 1,
      avatarCreator: (
        <ImgUser src={`${URL_IMAGE_USERS}/${item.user.avatar}`} alt="" />
      ),
      creator: item.user.username,
      content: item.content,
      file: (
        <File>
          {item.images.map((image, i) => {
            return <Img src={`${URL_IMAGE_POSTS}/${image.name}`} alt="" />;
          })}
        </File>
      ),
      comment: item.comments,
      like: item.likes,
      createdAt: formatDateOfBirth(item.createdAt.slice(0, 10)),
      updatedAt: formatDateOfBirth(
        item.updatedAt ? item.updatedAt.slice(0, 10) : ""
      ),
    };
  });

  const { TabPane } = Tabs;

  const callback = (key) => {};

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Posts Users" key="1">
              <PostUsersTable
                data={data}
                totalElements={posts?.totalElements}
              />
            </TabPane>
          </Tabs>
        </Left1>
      </Col1>
    </WrapperCol1>
  );
}

const WrapperCol1 = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Left1 = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 15px;
`;
const Col1 = styled.div``;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 2px;
  border-radius: 5px;
`;

const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const File = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: flex-start;
`;
