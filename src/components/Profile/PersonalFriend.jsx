import { Col, Row } from "antd";
import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 15px;
  min-width: 300px;
  margin-bottom: 30px;
  max-width: 430px;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.span`
  color: red;
  font-size: 18px;
  font-weight: 700;
`;

const Username = styled.p`
  color: #082850;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

const Images = styled.img`
  width: 100px;
  height: 100px;
  padding: 2px;
  object-fit: cover;
  border-radius: 10px;
`;
export default function PersonalImage({ personalInfo }) {
  const URL_USER = "http://localhost:3000/api/users/image";

  return (
    <Wrapper>
      <Header>
        <Title>Bạn bè</Title>
      </Header>
      <Row>
        {(personalInfo ? personalInfo.friends : []).map((image, index) => {
          return (
            <Col>
              <Images
                className="image-item-profile"
                src={`${URL_USER}/${image.user_friend.avatar}`}
                alt={""}
              />
              <Username>{image.user_friend.username}</Username>
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}
