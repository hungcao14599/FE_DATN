import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { PaperClipOutlined } from "@ant-design/icons";
import AvatarImg from "./../../assets/img/avatar.jpeg";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/post";
import Masonry from "react-masonry-css";
const Columns = {
  default: 5,
  1200: 3,
  1000: 2,
  700: 1,
};
const { TextArea } = Input;

const WrapPostForm = styled.div`
  border-radius: 3px;
  margin-bottom: 30px;
`;
const PostFormContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;
const Avatar = styled.div`
  max-height: 50px;
  max-width: 50px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Img = styled.img`
  height: 45px;
  width: 45px;
`;
const ButtonUpload = styled.div`
  cursor: pointer;
  border-radius: 6px;
  line-height: 16px;
  text-align: center;
  color: #249aff;
  font-size: 12px;
  position: relative;
  display: inline-block;
  border: none;
  button {
    background: #ca0533;
    border-radius: 10px;
    span {
      color: #fff;
    }
    :hover,
    :active,
    :focus {
      background: #ca0533;
    }
  }
`;

const InputUpload = styled.input`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

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
const PostInput = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 10px;
`;

const TextAreaPost = styled(TextArea)`
  ::placeholder {
    font-size: 17px;
    line-height: 1.2;
    text-align: left;
    color: #4e5551;
    font-weight: 600;
  }
`;

const Preview = styled.div`
  /* display: flex;
  justify-content: space-between; */
  margin-top: 20px;
  button {
    background: #ca0533;
    border-radius: 7px;
    width: 100%;
    span {
      color: #fff;
      display: flex;
      margin: 0 auto;
    }
    :hover,
    :active,
    :focus {
      background: #ca0533;
    }
  }
`;
export default function PostForm() {
  const [file, setFile] = useState();
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handlePost = () => {
    const formData = new FormData();
    let isFile = false;
    if (file) {
      Array.from(Array(file.length), (e, i) => {
        formData.append("file", file[i]);
      });
      isFile = true;
    }

    dispatch(addPost(content, 1, null, isFile, formData));
    setContent("");
    setFile(null);
    isFile = false;
  };

  return (
    <WrapPostForm>
      <PostFormContent>
        <PostInput>
          <Avatar style={{ padding: "0px" }}>
            <Img src={AvatarImg} alt="" />
          </Avatar>

          <TextAreaPost
            placeholder="What's the news"
            rows={2}
            autoSize
            value={content}
            style={{ border: "unset" }}
            onChange={handleChange}
          />

          <ButtonUpload>
            <Button type="default" size="large">
              <PaperClipOutlined /> Post It
            </Button>
            <InputUpload
              type="file"
              name="file"
              multiple
              onChange={(event) => {
                setFile(event.target.files);
              }}
            />
          </ButtonUpload>
        </PostInput>
        {file && (
          <>
            <Preview>
              <div className="center-masonry">
                <Masonry
                  breakpointCols={Columns}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <PreviewImg>
                    {Array.from(Array(file.length), (e, i) => {
                      return (
                        <ImagePreview key={i}>
                          <img src={URL.createObjectURL(file[i])} alt=""></img>
                        </ImagePreview>
                      );
                    })}
                  </PreviewImg>
                </Masonry>
              </div>
              <Button type="default" size="middle" onClick={handlePost}>
                Post
              </Button>
            </Preview>
          </>
        )}
      </PostFormContent>
    </WrapPostForm>
  );
}
