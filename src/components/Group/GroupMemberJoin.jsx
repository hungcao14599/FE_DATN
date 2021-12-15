import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchMemberJoinGroup,
  groupAdminApprovalUserJoinGroup,
} from "../../actions/group";

export default function GroupMemberJoin({ item }) {
  const URL_IMAGE_POSTS = "http://localhost:3000/api/users/image";
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(false);

  const handleMemberJoin = (id) => {
    dispatch(
      fetchMemberJoinGroup({
        id: id,
        size: 20,
        page: 1,
        keyword: "",
      })
    );
    setIsShow(!isShow);
  };

  const memberJoin = useSelector(
    (state) => state.group.fetchMemberJoinGroup.result.data
  );

  const handleApprovalGroup = (id) => {
    dispatch(groupAdminApprovalUserJoinGroup(id, item.id, true));
  };

  const handleRefuseGroup = (id) => {
    dispatch(groupAdminApprovalUserJoinGroup(id, item.id, true));
  };

  return (
    <>
      <ProfileGroup onClick={() => handleMemberJoin(item.id)}>
        <GroupImg>
          <img src={`${URL_IMAGE_POSTS}/${item.avatar}`} alt="" />
        </GroupImg>

        <GroupName>
          <Name>{item.name}</Name>
          <Des>{item.description}</Des>
        </GroupName>
      </ProfileGroup>
      {isShow ? (
        <Member>
          <Title>Member Join</Title>
          {memberJoin?.data.map((item, i) => {
            return (
              <Join>
                <MemberJoin>
                  <GroupImg>
                    <img
                      src={`${URL_IMAGE_POSTS}/${item.user.avatar}`}
                      alt=""
                    />
                  </GroupImg>

                  <GroupName>
                    <Name>{item.user.username}</Name>
                    <Des>{item.user.description}</Des>
                  </GroupName>
                </MemberJoin>
                <ButtonControl>
                  <ButtonConfirm
                    type="default"
                    size="small"
                    icon={<CheckCircleOutlined />}
                    onClick={() => handleApprovalGroup(item.user.id)}
                  >
                    Approval
                  </ButtonConfirm>

                  <ButtonConfirm
                    type="default"
                    size="small"
                    icon={<CloseCircleOutlined />}
                    onClick={() => handleRefuseGroup(item.user.id)}
                  >
                    Refuse
                  </ButtonConfirm>
                </ButtonControl>
              </Join>
            );
          })}
        </Member>
      ) : (
        ""
      )}
    </>
  );
}

const ButtonControl = styled.div`
  margin-top: 20px;
  flex: 1;
`;
const Title = styled.span`
  font-weight: 600;
`;
const ButtonConfirm = styled(Button)`
  color: #000;
  margin-bottom: 2px;
  font-weight: 500;
  border-radius: 2px;
  width: 100%;

  span {
    margin: 0 auto;
    font-size: 13px;
  }
  :hover,
  :active,
  :focus {
    color: #000;
  }
`;

const Join = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 30px;
`;

const Member = styled.div`
  border-top: 1px solid #ebedf3;
  border-bottom: 1px solid #ebedf3;
  padding: 8px 0px 15px 0px;
`;

const MemberJoin = styled.div`
  display: flex;
  flex-basis: 180px;
`;
const GroupImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const GroupName = styled.div`
  padding: 0 10px;
`;

const ProfileGroup = styled.div`
  display: flex;
  padding: 20px 0px;
  cursor: pointer;
`;

const Des = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
`;
