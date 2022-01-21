import {
  CameraOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  GroupOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button, Modal, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchAllFriendOfUserById } from "../../actions/friend";
import PostForm from "../Post/PostForm";
import PostList from "../Post/PostList";
import UploadAvatarImage from "../Profile/uploadAvatar";
import UploadCoverImage from "../Profile/uploadCoverImage";
import GroupIntroduce from "./GroupIntroduce";
import Members from "./Members";
import {
  fetchFileByGroupId,
  fetchMemberInGroup,
  userJoinGroup,
} from "../../actions/group";
import { useParams } from "react-router-dom";
import userIDHeader from "../../services/userIDHeader";
import { fetchAllPostByGroupId } from "../../actions/post";
import GroupFileMedia from "./GroupFIleMedia";
import ManagePosts from "./ManagePosts";
import { formatDateOfBirth } from "../../utils/formatDateOfBirth";
const Wrapper = styled.div`
  padding: 20px 180px;
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
  padding: 10px 20px;
`;

const Info = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: baseline;
`;
const FullName = styled.span`
  color: #000;
  font-size: 27px;
  font-weight: 600;
`;
const Username = styled.span`
  color: #376e37;
  font-size: 17px;
  font-weight: 600;
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
export default function GroupHeader({ groupData }) {
  const [isModalUploadAvatar, setIsModalUploadAvatar] = useState(false);
  const [isModalUploadCoverImage, setIsModalUploadCoverImage] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

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

  const membersInGroup = useSelector(
    (state) => state.group.fetchMemberInGroup.result.data
  );
  const postsByGroupID = useSelector(
    (state) => state.post.fetchAllPostByGroupId.result
  );

  const managePostsByGroupID = useSelector(
    (state) => state.post.fetchAllPostByGroupId.result.data
  );

  const files = useSelector((state) => state.group.fetchFileByGroupId.result);
  console.log(
    "🚀 ~ file: GroupHeader.jsx ~ line 121 ~ GroupHeader ~ files",
    files
  );
  const profile = useSelector((state) => state.user.fetchUserByID.result.data);

  useEffect(() => {
    dispatch(fetchAllFriendOfUserById(20, 1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFileByGroupId(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(
      fetchMemberInGroup({
        groupID: params.id,
        size: 20,
        page: 1,
        keyword: "",
      })
    );
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(
      fetchAllPostByGroupId({
        groupID: params.id,
        size: 20,
        page: 1,
      })
    );
  }, [dispatch, params.id]);

  const userID = userIDHeader();
  const member = membersInGroup?.data.filter((e) => e.user.id === userID);
  const { TabPane } = Tabs;
  const callback = (key) => {
    console.log(key);
  };
  const handleJoinGroup = (id) => {
    dispatch(userJoinGroup(id));
  };

  const URL_IMAGE_POSTS = "http://localhost:3000/api/posts/image";
  const URL_IMAGE_USERS = "http://localhost:3000/api/users/image";
  const URL_FILES = "http://localhost:3000/image/post";

  const data = managePostsByGroupID?.data.map((item, i) => {
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

  return (
    <Wrapper>
      <CoverImage>
        <img
          src={
            groupData?.coverImage
              ? `http://localhost:3000/api/users/image/${groupData?.coverImage}`
              : "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"
          }
          alt=""
        />

        <ButtonUploadCoverImage
          type="default"
          size="large"
          icon={<CameraOutlined />}
          onClick={handleUploadCoverImage}
        >
          Update Cover Image
        </ButtonUploadCoverImage>
      </CoverImage>
      <ProfileHeaderInfo>
        <HeaderInfo>
          <Info>
            <FullName>
              <GroupOutlined style={{ marginRight: 10, color: "#000" }} />
              {`${groupData?.name} `}
            </FullName>
            <Username>{`  - ${groupData?.description}`}</Username>
          </Info>
          {JSON.stringify(member) === JSON.stringify([]) ? (
            <ButtonConfirm
              type="default"
              size="large"
              icon={<PlusOutlined />}
              onClick={() => handleJoinGroup(params.id)}
            >
              Tham gia
            </ButtonConfirm>
          ) : (
            <ButtonConfirm
              type="default"
              size="large"
              icon={<UsergroupAddOutlined />}
            >
              Đã tham gia
            </ButtonConfirm>
          )}
        </HeaderInfo>

        <Container>
          <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane tab="Giới thiệu" key="1">
              <Introduce>
                <ContentInfo>
                  <GroupIntroduce membersInGroup={membersInGroup?.data} />
                </ContentInfo>
              </Introduce>
            </TabPane>
            <TabPane tab="Thảo luận" key="2">
              <ProfileContent>
                <ContentPost>
                  <PostForm />
                  <PostList items={postsByGroupID?.data} />
                </ContentPost>
                <ContentInfo>
                  {/* <GroupIntroduce membersInGroup={membersInGroup?.data} /> */}
                </ContentInfo>
              </ProfileContent>
            </TabPane>
            <TabPane tab="Phòng họp mặt" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Thành viên" key="4">
              <MemberTab>
                <Members />
              </MemberTab>
            </TabPane>
            <TabPane tab="File phương tiện" key="5">
              <Introduce>
                <ContentInfo>
                  <GroupFileMedia files={files?.data} />
                </ContentInfo>
              </Introduce>
            </TabPane>
            {membersInGroup?.data.map((item, i) => {
              if (item.user.username === profile?.username && item.role === 1) {
                return (
                  <TabPane tab="Quản trị" key="6">
                    <Introduce>
                      <ContentInfo>
                        <ManagePosts
                          data={data}
                          totalElements={managePostsByGroupID?.totalElements}
                        />
                      </ContentInfo>
                    </Introduce>
                  </TabPane>
                );
              }
            })}
          </Tabs>
        </Container>
      </ProfileHeaderInfo>

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
        <UploadCoverImage data={groupData} />
      </Modal>
    </Wrapper>
  );
}

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

const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  font-weight: 500;
  border-radius: 8px;

  span {
    margin: 0 auto;
    font-size: 13px;
  }
  :hover,
  :active,
  :focus {
    background: #ca0533;
    color: white;
  }
`;

const MemberTab = styled.div`
  padding: 15px 200px;
`;

const Introduce = styled.div`
  padding: 15px;
`;
const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  padding: 20px 0px;
  border-top: 1px solid #ebedf3;
`;
const ProfileContent = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  padding: 15px 100px;
`;

const ContentInfo = styled.div``;
const ContentPost = styled.div`
  width: 100%;
  margin-right: 20px;
`;
