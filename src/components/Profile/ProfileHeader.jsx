import { CameraFilled, CameraOutlined, EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { UpdateInfomation } from "./UpdateInfo";
const Wrapper = styled.div`
  padding: 20px 50px;
`;
const CoverImage = styled.div`
  width: auto;
  height: 400px;
  background: url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg");
  background-size: cover;
  display: flex;
  margin: 0 auto;
`;
const ProfileHeaderInfo = styled.div`
  border-bottom: 1px solid #ebedf3;
`;
const AvatarImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -150px;
  margin-bottom: 5px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
`;
const Info = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const FullName = styled.span`
  text-align: center;
  color: #ca0533;
  font-size: 23px;
  font-weight: 600;
`;
const Username = styled.span`
  text-align: center;
  color: #376e37;
  font-size: 15px;
  font-weight: 500;
`;
const UpdateInfo = styled.p`
  color: #354e70;
  font-size: 13px;
  cursor: pointer;
`;
const UploadAvatar = styled.div`
  width: fit-content;
  height: auto;
  background: gray;
  border-radius: 50%;
  display: flex;
  padding: 5px;
  border: 2px solid #fff;
  margin: 0 auto;
  margin-top: -40px;
  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

export default function ProfileHeader() {
  const [isModal, setIsModal] = useState(false);
  const profile = useSelector((state) => state.user.fetchUserByID.result.data);
  const handleModalUpdateInfo = () => {
    setIsModal(!isModal);
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <Wrapper>
      <CoverImage>
        <img src={profile?.CoverImage} alt="" />
      </CoverImage>
      <ProfileHeaderInfo>
        <AvatarImage>
          <img src={profile?.avatar} alt="" />
        </AvatarImage>
        <UploadAvatar>
          <CameraOutlined />
        </UploadAvatar>
        <Info>
          <FullName>{`${profile?.firstname} ${profile?.lastname}`}</FullName>
          <Username>{` (${profile?.username})`}</Username>
          <UpdateInfo onClick={handleModalUpdateInfo}>
            <EditOutlined />
            Update Infomation
          </UpdateInfo>
        </Info>
      </ProfileHeaderInfo>

      <Modal
        title="Basic Modal"
        visible={isModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <UpdateInfomation items={profile} />
      </Modal>
    </Wrapper>
  );
}
