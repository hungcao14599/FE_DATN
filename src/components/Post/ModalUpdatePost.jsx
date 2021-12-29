import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import {
  CloseOutlined,
  CloudUploadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import Masonry from "react-masonry-css";
import { fetchUserById } from "../../actions/user";
import { updatePost } from "../../actions/post";
import Gallery from "react-photo-gallery";
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
  width: 800px;
  height: auto;
`;
const PostFormContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
`;
const Avatar = styled.div`
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Img = styled.img`
  height: 50px;
  width: 68px;
  object-fit: cover;
  border-radius: 50%;
`;
const ButtonUpload = styled.div`
  cursor: pointer;
  border-radius: 6px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  position: relative;
  display: inline-block;
  border: none;
  margin-left: 10px;
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
  align-items: center;
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 10px;
`;

const TextAreaPost = styled(TextArea)`
  & {
    border-radius: 7.5px;
    border-color: #ebebeb;
    ::placeholder {
      font-size: 17px;
      line-height: 1.2;
      text-align: left;
      color: #adafae;
    }
    :focus {
      border-color: #40a9ff;
    }
  }
`;

const Preview = styled.div`
  margin-top: 20px;
  button {
    background: #ca0533;
    border-radius: 5px;
    width: 100%;
    margin-top: 15px;
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
export default function ModalUpdatePost({ postID, content, images, profile }) {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";
  const [file, setFile] = useState();
  const [contentUpdate, setContentUpdate] = useState("");
  const [imagesData, setImagesData] = useState(images);

  const imagesList =
    images.length === 0
      ? []
      : images.map((image) => {
          if (image.name.split(".").pop() === "jpg") {
            return {
              src: `http://localhost:3000/api/posts/image/${image.name}`,
              width: 2,
              height: 2,
            };
          } else
            return {
              link: `http://localhost:3000/image/post/${image.name}`,
              filename: image.name,
            };
        });

  useEffect(() => {
    setContentUpdate(content);
  }, [content]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContentUpdate(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  const removeImage = () => {
    setImagesData(images.splice(0, images.length));
  };

  const handleUpdatePost = () => {
    const arr = [];
    images.forEach((img) => {
      arr.push(img.id);
    });

    const formData = new FormData();
    let isFile = false;
    if (file) {
      Array.from(Array(file.length), (e, i) => {
        formData.append("file", file[i]);
      });
      isFile = true;
    }

    dispatch(updatePost(postID, contentUpdate, arr, isFile, formData));
    setContentUpdate("");
    setFile(null);
    isFile = false;
  };

  return (
    <WrapPostForm>
      <PostFormContent>
        <PostInput>
          <Avatar style={{ padding: "0px" }}>
            <Img src={`${URL_IMAGE_USER}/${profile?.avatar}`} alt="" />
          </Avatar>

          <TextAreaPost
            placeholder={`What is the news ${profile ? profile.username : ""}`}
            rows={2}
            // autoSize
            defaultValue={content}
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

        <PostImg>
          {imagesList[0]?.link ? (
            // eslint-disable-next-line array-callback-return
            imagesList.map((item, i) => {
              if (item.filename.split(".").pop() === "pdf") {
                return (
                  <FileShare>
                    <FilePdfOutlined style={{ color: "#ca0533" }} />
                    <a href={item.link} target={"_blank"} rel="noreferrer">
                      {item.filename}
                    </a>
                  </FileShare>
                );
              } else if (item.filename.split(".").pop() === "docx") {
                return (
                  <FileShare>
                    <FileWordOutlined style={{ color: "#103D8F" }} />
                    <a href={item.link}>{item.filename}</a>
                  </FileShare>
                );
              } else if (item.filename.split(".").pop() === "xlsx") {
                return (
                  <FileShare>
                    <FileExcelOutlined style={{ color: "#207245" }} />
                    <a href={item.link}>{item.filename}</a>
                  </FileShare>
                );
              }
            })
          ) : (
            <Gallery photos={imagesList} />
          )}
          {JSON.stringify(imagesData) === JSON.stringify([]) ? (
            ""
          ) : (
            <Remove>
              <CloseOutlined onClick={removeImage} />
            </Remove>
          )}
        </PostImg>

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
            </Preview>
          </>
        )}
        <Button type="default" size="large" onClick={handleUpdatePost}>
          <CloudUploadOutlined /> Post
        </Button>
      </PostFormContent>
    </WrapPostForm>
  );
}
const Remove = styled.div`
  position: absolute;
  top: 14%;
  right: 5%;
  background-color: #fff;
  border-radius: 50%;
  padding: 4px;
  height: 28px;
  svg {
    width: 20px;
    height: 20px;
    color: gray;
  }
`;
const PostImg = styled.div`
  margin: 10px 0px 20px 0px;
  border-radius: 5px;
`;

const FileShare = styled.div`
  background: #f0f2f5;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ebedf3;
  margin-bottom: 10px;
  width: 100%;
  span {
    padding: 0 10px;
  }
  a {
    color: #000;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;
