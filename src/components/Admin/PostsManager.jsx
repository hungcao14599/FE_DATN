import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { fetchAllPostsRoleAdmin } from "../../actions/post";
import PostUsersTable from "./PostUsersTable";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";
import {
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
} from "@ant-design/icons";

export default function PostsManager() {
  const URL_IMAGE_POSTS = "http://localhost:3000/api/posts/image";
  const URL_IMAGE_USERS = "http://localhost:3000/api/users/image";
  const URL_FILES = "http://localhost:3000/image/post";

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
      postID: item.id,
      content: item.content,
      file: (
        <File>
          {item.images.map((image, i) => {
            if (image.name.split(".").pop() === "pdf") {
              return (
                <FileShare>
                  <FilePdfOutlined style={{ color: "#ca0533" }} />
                  <a
                    href={`${URL_FILES}/${image.name}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {image.name}
                  </a>
                </FileShare>
              );
            } else if (image.name.split(".").pop() === "docx") {
              return (
                <FileShare>
                  <FileWordOutlined style={{ color: "#103D8F" }} />
                  <a href={`${URL_FILES}/${image.name}`}>{image.name}</a>
                </FileShare>
              );
            } else if (image.name.split(".").pop() === "xlsx") {
              return (
                <FileShare>
                  <FileExcelOutlined style={{ color: "#207245" }} />
                  <a href={`${URL_FILES}/${image.name}`}>{image.name}</a>
                </FileShare>
              );
            } else {
              return <Img src={`${URL_IMAGE_POSTS}/${image.name}`} alt="" />;
            }
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

const FileShare = styled.div`
  background: #f0f2f5;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ebedf3;
  margin-bottom: 10px;
  width: fit-content;
  span {
    padding: 0 10px;
  }
  a {
    color: #000;
    padding: 0px 10px 0px 0px;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

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
  /* display: grid;
  grid-template-columns: auto auto;
  justify-content: flex-start; */
`;
