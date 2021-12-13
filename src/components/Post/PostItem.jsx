import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Dropdown,
  Menu,
  Form,
  Input,
  Modal as Modal1,
  Col,
  Row,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  CommentOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { formatDate } from "../../utils/formatDate";
import { handlePostLike } from "../../actions/like";
import { addCommentToPost, fetchCommentByPost } from "../../actions/comment";
import PostComment from "./PostComment";
import { fetchAllPosts, removePost } from "../../actions/post";
import LikeActionIcon from "../../assets/img/likeAction.png";
import LikeIcon from "../../assets/img/like.png";
import Carousel, { Modal, ModalGateway } from "react-images";

import Gallery from "react-photo-gallery";
import Photo from "./Photo";

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
    border-radius: 50%;
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
  border-radius: 5px;
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { comment: "" },
  });

  const { confirm } = Modal1;
  const statusLike = data.like.length > 0 ? true : false;
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();

  const [isComment, setIsComment] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const handleOk = (id) => {
    dispatch(removePost(id));
    dispatch(fetchAllPosts(20, 1));
  };

  const handleCancel = () => {
    setIsRemove(false);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this post?",
      icon: <ExclamationCircleOutlined />,
      content: `Post: ${data ? data.content : ""}`,
      okText: "Yes",
      okType: "danger",
      // cancelText: "No",
      onOk: () => handleOk(data.id),
      onCancel: handleCancel,
      visible: isRemove,
    });
  };

  const handlePostMood = (id) => {
    dispatch(handlePostLike(id));
    setStep(step + 1);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Update Post</Menu.Item>
      <Menu.Item key="2" onClick={showDeleteConfirm}>
        Remove Post
      </Menu.Item>
    </Menu>
  );

  const handleSendComment = handleSubmit((items, e) => {
    dispatch(addCommentToPost(items.comment, e));
    dispatch(fetchAllPosts(20, 1));
    dispatch(fetchCommentByPost(data.id, 10, 1));
    setIsComment(true);
    setStep(step + 1);
  });

  const handleComment = () => {
    setIsComment(!isComment);
  };

  const profile = useSelector((state) => state.user.fetchUserByID.result.data);
  const URL = "http://localhost:3000/api/users/image";

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const images =
    data.images.length === 0
      ? []
      : data.images.map((image) => {
          const photo = {
            src: `http://localhost:3000/api/posts/image/${image.name}`,
            width: 3,
            height: 4,
          };
          return photo;
        });

  return (
    <Wrapper>
      <HeaderPost>
        <Info>
          <ProfileInfo>
            <ProfileImg>
              <img src={`${URL}/${data?.user.avatar}`} alt="" />
            </ProfileImg>

            <ProfileName>
              <Link to={`/tlu/profile/${data.user.username}`}>
                <Name>{data ? data.user.username : ""}</Name>
              </Link>
              <DateTimeInfo>{formatDate(data.createdAt)}</DateTimeInfo>
            </ProfileName>
          </ProfileInfo>
        </Info>
        <Control>
          {(profile ? profile.username : "") ===
          (data ? data.user.username : "") ? (
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          ) : (
            ""
          )}
        </Control>
      </HeaderPost>
      <Content>
        <Caption>{data ? data.content : ""}</Caption>
      </Content>
      <PostImg>
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </PostImg>
      <Interact>
        <InteractItem>
          <LikeMood>
            {statusLike ? (
              <ButtonLike onClick={() => handlePostMood(data.id)}>
                <img src={LikeActionIcon} alt="" width="23px" height="23px" />
              </ButtonLike>
            ) : (
              <ButtonLike onClick={() => handlePostMood(data.id)}>
                <img src={LikeIcon} alt="" width="23px" height="23px" />
              </ButtonLike>
            )}

            <Like>{data.like.length}</Like>
          </LikeMood>
          <LikeMood>
            <ButtonLike onClick={handleComment}>
              <CommentOutlined />
            </ButtonLike>
            <Like>{data.comment.length}</Like>
          </LikeMood>
        </InteractItem>
        <View>
          <EyeOutlined />
          <ViewItem>{step}</ViewItem>
        </View>
      </Interact>
      <Comment>
        <ProfileImgComment>
          <img src={`${URL}/${profile?.avatar}`} alt="" />
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
        <ButtonLike onClick={() => handleSendComment(data.id)}>
          <SendOutlined />
        </ButtonLike>
      </Comment>

      {isComment ? <PostComment id={data.id} /> : ""}
    </Wrapper>
  );
}
