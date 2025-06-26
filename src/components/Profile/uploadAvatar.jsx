import { UploadOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchUserByName, uploadAvatar } from "../../actions/user";
import User from "../../assets/img/user.png";
const Wrapper = styled.div`
  padding: 30px;
  min-width: 600px;
`;
const PreviewAvatar = styled.div`
  height: 300px;
  width: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin: auto;
  border: 1px solid #666666;
  margin: 10px auto 20px;
  position: relative;
  background: url(${User}) no-repeat;
  background-position: center;
  background-size: contain;
  img {
    width: auto;
    height: 300px;
    object-fit: cover;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Image = styled.div`
  border-top: 1px solid #afb9d1;
  border-bottom: 1px solid #afb9d1;
  padding: 15px 0px;
`;
export default function UploadAvatarImage() {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";
  const profile = useSelector((state) => state.user.fetchUserByID.result?.data);
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const handleChange = () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file[0]);
      dispatch(uploadAvatar(formData));
      // dispatch(fetchUserByName(params.username));
    }
  };

  return (
    <>
      <Wrapper>
        <Title>Cập nhật ảnh đại diện</Title>
        <Image>
          <PreviewAvatar>
            <img
              src={
                file
                  ? URL.createObjectURL(file[0])
                  : `${URL_IMAGE_USER}/${profile?.avatar}`
              }
              alt=""
            />
          </PreviewAvatar>
          <ButtonUploadload>
            <Button type="default" size="middle">
              <PaperClipOutlined /> Upload
            </Button>

            <InputUpload
              type="file"
              name="file"
              onChange={(event) => {
                setFile(event.target.files);
              }}
            />
          </ButtonUploadload>
        </Image>
        <ButtonSubmit>
          <Button type="default" size="middle" onClick={handleChange}>
            <UploadOutlined /> Update Avatar
          </Button>
        </ButtonSubmit>
      </Wrapper>
    </>
  );
}

const ButtonSubmit = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  position: relative;
  display: inline-block;
  border: none;
  margin-top: 15px;
  button {
    width: 100%;
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

const ButtonUploadload = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  position: relative;
  display: inline-block;
  border: none;
  button {
    width: 100%;
    background: #5a5053;
    border-radius: 10px;
    span {
      color: #fff;
    }
    :hover,
    :active,
    :focus {
      background: #5a5053;
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
  width: 100%;
`;
