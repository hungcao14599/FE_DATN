import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchImgByUserName } from "../../actions/user";

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

const Images = styled.img`
  width: 100px;
  height: 100px;
  padding: 2px;
  object-fit: cover;
  border-radius: 10px;
`;
export default function PersonalImage() {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchImgByUserName(params.username));
  }, [dispatch, params.username]);

  const images = useSelector(
    (state) => state.user.fetchImgByUserName.result.data
  );

  const URL_USER = "http://localhost:3000/api/users/image";
  const URL_POST = "http://localhost:3000/api/posts/image";

  return (
    <Wrapper>
      <Header>
        <Title>Hình ảnh</Title>
      </Header>
      <Row>
        {(images ? images : []).map((image, index) => {
          return (
            <Col>
              <Images
                className="image-item-profile"
                src={
                  image.type === 1
                    ? `${URL_USER}/${image.name}`
                    : `${URL_POST}/${image.name}`
                }
                alt={""}
              />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}
