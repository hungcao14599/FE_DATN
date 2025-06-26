import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import {
  CloudUploadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addPost, fetchAllPostsByUserName } from "../../actions/post";
import Masonry from "react-masonry-css";
import { fetchImgByUserName, fetchUserById } from "../../actions/user";
import { useParams } from "react-router-dom";
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
export default function PostForm() {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";
  const [file, setFile] = useState();
  const [content, setContent] = useState("");
  const params = useParams();
  const profile = useSelector((state) => state.user.fetchUserByID.result?.data);
  const groupInfo = useSelector((state) => state.group.fetchGroupById.result);

  const userName = profile?.username;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  const handlePost = () => {
    const formData = new FormData();
    let isFile = false;
    if (file) {
      Array.from(Array(file.length), (e, i) => {
        formData.append("file", file[i]);
      });
      isFile = true;
    }

    groupInfo?.data
      ? dispatch(
          addPost(
            content,
            groupInfo?.data.id === +params.id ? 3 : 1,
            groupInfo?.data.id === +params.id ? +params.id : null,
            isFile,
            formData
          )
        )
      : dispatch(addPost(content, 1, null, isFile, formData)).then((res) => {
          dispatch(fetchAllPostsByUserName(userName, 20, 1));
          dispatch(fetchImgByUserName(userName));
        });

    setContent("");
    setFile(null);
    isFile = false;
  };

  const URL_FILE = "http://localhost:3000/image/post";

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
                  <PreviewImg
                    style={{
                      display:
                        file[0].type.slice(0, 5) === "image" ? "flex" : "unset",
                    }}
                  >
                    {Array.from(Array(file.length), (e, i) => {
                      if (file[i].type.slice(0, 5) === "image") {
                        return (
                          <ImagePreview key={i}>
                            <img
                              src={URL.createObjectURL(file[i])}
                              alt=""
                            ></img>
                          </ImagePreview>
                        );
                      } else if (
                        file[i].type.split(".", 4).pop() === "document"
                      ) {
                        return (
                          <FileShare>
                            <FileWordOutlined style={{ color: "#103D8F" }} />
                            <a href={`${URL_FILE}/${file[i].name}`}>
                              {file[i].name}
                            </a>
                          </FileShare>
                        );
                      } else if (file[i].type.split(".", 4).pop() === "sheet") {
                        return (
                          <FileShare>
                            <FileExcelOutlined style={{ color: "#207245" }} />
                            <a href={`${URL_FILE}/${file[i].name}`}>
                              {file[i].name}
                            </a>
                          </FileShare>
                        );
                      } else if (file[i].name.split(".").pop() === "pdf") {
                        return (
                          <FileShare>
                            <FilePdfOutlined style={{ color: "#ca0533" }} />
                            <a
                              href={`${URL_FILE}/${file[i].name}`}
                              target={"_blank"}
                              rel="noreferrer"
                            >
                              {file[i].name}
                            </a>
                          </FileShare>
                        );
                      }
                    })}
                  </PreviewImg>
                </Masonry>
              </div>
            </Preview>
          </>
        )}
        <Preview>
          <Button type="default" size="large" onClick={handlePost}>
            <CloudUploadOutlined /> Post
          </Button>
        </Preview>
      </PostFormContent>
    </WrapPostForm>
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
