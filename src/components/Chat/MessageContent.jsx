import React from "react";
import styled from "styled-components";

export default function MessageContent({ content, avatar, username, name }) {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";

  return (
    <Wrapper
      style={{ justifyContent: `${username === name ? "end" : "start"}` }}
    >
      {username === name ? (
        ""
      ) : (
        <Avatar>
          <img src={`${URL_IMAGE_USER}/${avatar}`} alt="" />
        </Avatar>
      )}

      <Content>
        <Message>{content}</Message>
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  margin-left: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
`;
const Message = styled.span`
  background: #ca0533;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
`;
const Avatar = styled.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
