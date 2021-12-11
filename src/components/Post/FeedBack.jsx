import React from "react";
import styled from "styled-components";
import { formatDate } from "../../utils/formatDate";

export default function FeedBack({ data }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchImage(data?.user.avatar));
  // }, [data?.user.avatar, dispatch]);
  // const image = useSelector((state) => state.user.fetchImage.result);
  const URL = "http://localhost:3000/api/users/image";
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
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
  font-size: 15px;
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
const Content = styled.p``;
const ProfileImgComment = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
