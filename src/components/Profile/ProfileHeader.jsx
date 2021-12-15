import {
  CameraOutlined,
  EditOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addFriend, fetchAllFriendOfUserById } from "../../actions/friend";
import userIDHeader from "../../services/userIDHeader";
import { UpdateInfomation } from "./UpdateInfo";
import UploadAvatarImage from "./uploadAvatar";
import UploadCoverImage from "./uploadCoverImage";
const Wrapper = styled.div`
  padding: 20px 120px;
`;
const CoverImage = styled.div`
  width: 100%;
  height: 400px;
  background: url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg");
  background-size: cover;
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
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
  margin-top: -45px;
  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

const ButtonMakeFriend = styled(Button)`
  background: #ca0533;
  color: white;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  :hover,
  :active,
  :focus {
    background: #ca0533;
    color: white;
  }
`;

const ButtonUploadCoverImage = styled(Button)`
  margin: 15px;
  background: #fff;
  color: #000;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  display: flex;
  font-size: 14px;
  align-items: center;
  position: absolute;
  cursor: pointer;
  :hover,
  :active,
  :focus {
    background: #fff;
    color: #000;
  }
`;
export default function ProfileHeader({ profile }) {
  const [isModal, setIsModal] = useState(false);
  const [isModalUploadAvatar, setIsModalUploadAvatar] = useState(false);
  const [isModalUploadCoverImage, setIsModalUploadCoverImage] = useState(false);
  const isAddFriend = useSelector((state) => state.friend.addFriend.result);
  console.log("isAddFriend", isAddFriend?.isFriend);
  const isFriendRequest = isAddFriend?.isFriend;

  const userID = userIDHeader();
  const params = useParams();
  const dispatch = useDispatch();
  const listFriend = useSelector(
    (state) => state.friend.fetchAllFriendOfUserById.result.data
  );
  const isFriend = listFriend?.data.filter(
    (e) => e.user_friend.username === params.username
  );
  const profileInfo = useSelector(
    (state) => state.user.fetchUserByID.result.data
  );

  const handleModalUpdateInfo = () => {
    setIsModal(!isModal);
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  const handleUploadAvatar = () => {
    setIsModalUploadAvatar(!isModalUploadAvatar);
  };

  const handleOkUploadAvatar = () => {
    setIsModalUploadAvatar(false);
  };

  const handleCancelUploadAvatar = () => {
    setIsModalUploadAvatar(false);
  };

  const handleUploadCoverImage = () => {
    setIsModalUploadCoverImage(!isModalUploadCoverImage);
  };

  const handleOkUploadCoverImage = () => {
    setIsModalUploadCoverImage(false);
  };

  const handleCancelUploadCoverImage = () => {
    setIsModalUploadCoverImage(false);
  };

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1));
  }, [dispatch]);

  const handleMakeFriend = () => {
    dispatch(addFriend(profile?.id));
  };

  return (
    <Wrapper>
      <CoverImage>
        <img
          src={`http://localhost:3000/api/users/image/${profile?.coverImage}`}
          alt=""
        />
        {profile?.id === userID ? (
          <ButtonUploadCoverImage
            type="default"
            size="large"
            icon={<CameraOutlined />}
            onClick={handleUploadCoverImage}
          >
            Update Cover Image
          </ButtonUploadCoverImage>
        ) : (
          ""
        )}
      </CoverImage>
      <ProfileHeaderInfo>
        <AvatarImage>
          <img
            src={`http://localhost:3000/api/users/image/${profile?.avatar}`}
            alt=""
          />
        </AvatarImage>
        {profile?.id === userID ? (
          <UploadAvatar>
            <CameraOutlined onClick={handleUploadAvatar} />
          </UploadAvatar>
        ) : (
          ""
        )}

        <Info>
          <FullName>{`${profile?.firstname} ${profile?.lastname}`}</FullName>
          <Username>{` (${profile?.username})`}</Username>
          {profile?.id === userID ? (
            <UpdateInfo onClick={handleModalUpdateInfo}>
              <EditOutlined />
              Update Infomation
            </UpdateInfo>
          ) : JSON.stringify(isFriend) === JSON.stringify([]) ? (
            <ButtonMakeFriend
              type="default"
              size="large"
              icon={<UserAddOutlined />}
              onClick={handleMakeFriend}
            >
              {isFriendRequest ? "Sent A Friend Request" : "Make Friend"}
              {/* Make Friend */}
            </ButtonMakeFriend>
          ) : (
            <ButtonMakeFriend
              type="default"
              size="large"
              icon={<UserSwitchOutlined />}
            >
              Friend
            </ButtonMakeFriend>
          )}
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

      <Modal
        title="Basic Modal"
        visible={isModalUploadAvatar}
        onOk={handleOkUploadAvatar}
        onCancel={handleCancelUploadAvatar}
      >
        <UploadAvatarImage />
      </Modal>

      <Modal
        title="Basic Modal"
        visible={isModalUploadCoverImage}
        onOk={handleOkUploadCoverImage}
        onCancel={handleCancelUploadCoverImage}
      >
        <UploadCoverImage data={profileInfo} />
      </Modal>
    </Wrapper>
  );
}
