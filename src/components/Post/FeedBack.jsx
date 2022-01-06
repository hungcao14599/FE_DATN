import {
  EditOutlined,
  ExclamationCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Menu, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchCommentByPost,
  removeCommentOfPost,
  updateCommentOfPost,
} from "../../actions/comment";
import { fetchAllPosts } from "../../actions/post";
import { formatDate } from "../../utils/formatDate";

export default function FeedBack({ data, postID }) {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { comment: "" },
  });

  useEffect(() => {
    const fields = ["comment"];
    fields.forEach((field) => setValue(field, data.content));
  }, [data.content, setValue]);

  const profile = useSelector((state) => state.user.fetchUserByID.result.data);
  const dispatch = useDispatch();
  const [isRemove, setIsRemove] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const { confirm } = Modal;

  const handleOk = (id) => {
    dispatch(removeCommentOfPost(id)).then(() => {
      dispatch(fetchCommentByPost(postID, 20, 1));
      dispatch(fetchAllPosts(20, 1));
    });
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

  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  const handleSendComment = handleSubmit((items, e) => {
    dispatch(updateCommentOfPost(e, items.comment)).then(() => {
      dispatch(fetchAllPosts(20, 1));
      dispatch(fetchCommentByPost(postID, 10, 1));
    });
    setIsUpdate(false);
  });

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={handleUpdate}>
        Update Comment
      </Menu.Item>
      <Menu.Item key="2" onClick={showDeleteConfirm}>
        Remove Comment
      </Menu.Item>
    </Menu>
  );
  const URL = "http://localhost:3000/api/users/image";
  return (
    <Wrapper>
      <>
        {isUpdate ? (
          <CommentUpdate>
            {/* <ProfileImgComment>
              <img src={`${URL}/${profile?.avatar}`} alt="" />
            </ProfileImgComment> */}
            <Form.Item
              style={{
                marginBottom: "unset",
                width: "100%",
                padding: "0px 20px 0px 60px",
              }}
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
                    // placeholder="What do you think about it?"
                    onKeyPress={(event) =>
                      event.key === "Enter" ? handleSendComment(data.id) : null
                    }
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
          </CommentUpdate>
        ) : (
          ""
        )}
        <CommentContent>
          <div>
            <CommentFeedBack>
              <ProfileImgComment>
                <img src={`${URL}/${data?.user.avatar}`} alt="" />
              </ProfileImgComment>
              <Comment>
                <Username>{data ? data.user.username : ""}</Username>
                <Content>{data ? data.content : ""}</Content>
              </Comment>
            </CommentFeedBack>
            <Time>{formatDate(data?.createdAt)}</Time>
          </div>
          <SelectOption>
            {(profile ? profile.username : "") === data.user.username ? (
              <Dropdown.Button overlay={menu}></Dropdown.Button>
            ) : (
              ""
            )}
          </SelectOption>
        </CommentContent>
      </>
    </Wrapper>
  );
}

const CommentContent = styled.div`
  display: flex;
  align-items: center;
`;
const CommentUpdate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const SelectOption = styled.div`
  button {
    border: unset;
  }
`;
const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const Time = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-left: 60px;
  margin-top: 3px;
  color: #b3b0b0;
  font-size: 13px;
`;
const Username = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #082850;
`;

const CommentFeedBack = styled.div`
  margin-top: 15px;
  display: flex;
`;

const Comment = styled.div`
  width: fit-content;
  background: #f4f8f7;
  border-radius: 5px;
  margin: 0 20px;
  padding: 6px 12px;
`;
const Content = styled.p`
  font-size: 13px;
  margin-bottom: unset;
`;
const ProfileImgComment = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
