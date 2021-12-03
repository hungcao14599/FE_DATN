import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "./../../assets/img/avatar.jpeg";
import { Button, Dropdown, Menu, Form, Input } from "antd";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import {
  CommentOutlined,
  EditOutlined,
  EyeOutlined,
  HeartOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { formatDate } from "../../utils/formatDate";
import { handlePostLike } from "../../actions/like";
import { addCommentToPost, fetchCommentByPost } from "../../actions/comment";
import FeedBack from "./FeedBack";
import PostComment from "./PostComment";

const Wrapper = styled.div`
  width: auto;
  height: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 20px;
  margin-bottom: 50px;
`;
const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div``;
const ProfileImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
const ProfileImgComment = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileName = styled.div`
  padding-left: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
`;

const DateTimeInfo = styled.p`
  color: #767676;
  font-size: 14px;
  font-weight: 500;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 17px;
  color: #082850;
`;

const Control = styled.div``;

const Content = styled.div`
  margin-top: 10px;
`;

const Caption = styled.span`
  color: #354e70;
  font-style: 14px;
  font-weight: 550;
  line-height: 1.8;
`;

const PostImg = styled.div`
  margin: 10px 0px 20px 0px;
`;

const Interact = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebedf3;
  margin-bottom: 10px;
  padding-bottom: 8px;
`;

const ButtonLike = styled(Button)`
  border: none !important;
  padding: 5px;
  :hover,
  :focus,
  :active {
    border: none !important;
  }
  svg {
    width: 23px;
    height: 23px;
    color: #3d3e41;
    :hover {
      color: #ca0533;
    }
  }
`;

const Like = styled.span`
  font-size: 15px;
  color: #082850;
`;

const LikeMood = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 30px;
`;

const View = styled.div`
  display: flex;
  align-items: flex-end;

  svg {
    width: 23px;
    height: 23px;
    margin: 5px;
    color: #3d3e41;
    :hover {
      color: #ca0533;
    }
  }
`;

const InteractItem = styled.div`
  display: flex;
`;

const ViewItem = styled.span`
  font-size: 15px;
  color: #082850;
  margin-bottom: 2px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentInput = styled(Input)`
  width: 100%;
  margin-bottom: 5px;
  margin-top: 10px;
  input {
    font-size: 13px;
    background-color: #f4f8f7;
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const Logo = styled.div`
  svg {
    width: 14px;
    height: 14px;
  }
`;

export default function PostItem({ data, id }) {
  // useEffect(() => {
  //   dispatch(fetchCommentByPost(id, 10, 1));
  // }, [id, dispatch]);

  // const commentData = useSelector(
  //   (state) => state.comment.fetchCommentByPost.result.data
  // );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { comment: "" },
  });
  const dispatch = useDispatch();

  const [isComment, setIsComment] = useState(false);

  const Columns = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const hand = () => {
    console.log("here");
  };

  const handlePostMood = (id) => {
    dispatch(handlePostLike(id));
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={hand}>
        Update Post
      </Menu.Item>
      <Menu.Item key="2">Remove Post</Menu.Item>
    </Menu>
  );

  const handleSendComment = handleSubmit((items) => {
    dispatch(addCommentToPost(items.commment, data.id));
    setValue("");
  });

  const handleComment = () => {
    setIsComment(!isComment);
  };

  return (
    <Wrapper>
      <HeaderPost>
        <Info>
          <ProfileInfo>
            <ProfileImg>
              <img src={Avatar} alt="" />
            </ProfileImg>

            <ProfileName>
              <Link
              //   to={`/tlu/profile/${username}`}
              >
                <Name>{data ? data.user.username : ""}</Name>
              </Link>
              <DateTimeInfo>{formatDate(data.createdAt)}</DateTimeInfo>
            </ProfileName>
          </ProfileInfo>
        </Info>
        <Control>
          <Dropdown.Button overlay={menu}></Dropdown.Button>
        </Control>
      </HeaderPost>
      <Content>
        <Caption>{data ? data.content : ""}</Caption>
      </Content>
      <PostImg>
        <Masonry
          breakpointCols={Columns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <PreviewImg>
            {data.images.length !== 0
              ? data.images.map((image, i) => {
                  return (
                    <ImagePreview key={i}>
                      <img
                        src={`http://localhost:3000/api/posts/image/${image.name}`}
                        alt=""
                      />
                    </ImagePreview>
                  );
                })
              : ""}
          </PreviewImg>
        </Masonry>
      </PostImg>
      <Interact>
        <InteractItem>
          <LikeMood>
            <ButtonLike onClick={() => handlePostMood(data.id)}>
              <HeartOutlined />
            </ButtonLike>
            <Like>{data.likes}</Like>
          </LikeMood>
          <LikeMood>
            <ButtonLike onClick={handleComment}>
              <CommentOutlined />
            </ButtonLike>
            <Like>{data.comments}</Like>
          </LikeMood>
        </InteractItem>
        <View>
          <EyeOutlined />
          <ViewItem>
            {data.comments > data.likes ? data.comments : data.likes}
          </ViewItem>
        </View>
      </Interact>
      <Comment>
        <ProfileImgComment>
          <img src={Avatar} alt="" />
        </ProfileImgComment>
        <Form.Item
          help={errors.email && errors.email?.message}
          validateStatus={
            errors.email && errors.email?.message ? "error" : "validating"
          }
          style={{ marginBottom: "unset", width: "100%", padding: "0px 20px" }}
        >
          <Controller
            control={control}
            name="comment"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <CommentInput
                size="large"
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <EditOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="What do you think about it?"
                style={{
                  backgroundColor: "#f4f8f7",
                  border: "none",
                }}
              />
            )}
          />
        </Form.Item>
        <ButtonLike onClick={handleSendComment}>
          <SendOutlined />
        </ButtonLike>
      </Comment>

      {isComment ? <PostComment id={data.id} /> : ""}
    </Wrapper>
  );
}

const PreviewImg = styled.div`
  display: flex;
  padding-bottom: 3px;
`;

const ImagePreview = styled.div`
  width: auto;
  height: auto;
  margin-right: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
