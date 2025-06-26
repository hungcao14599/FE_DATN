import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { SendOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { fetchMessageByChatId } from "../../actions/message";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MessageContent from "./MessageContent";

export default function MessageBox({ message, setMessage, sendMessage }) {
  const URL_IMAGE_USER = "http://localhost:3000/api/users/image";
  const profile = useSelector((state) => state.user.fetchUserByID.result?.data);
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessageByChatId(params.id, 15, 1));
  }, [dispatch, params.id]);

  const messages = useSelector(
    (state) => state.message.fetchMessageByChatId.result.data
  );

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(scrollToBottom, [messages?.data]);

  return (
    <WrapperCol1>
      <Col1>
        <Left1>
          <TitleGroup>
            <ProfileGroup style={{ padding: "unset" }}>
              <GroupImg>
                <img src={`${URL_IMAGE_USER}/${profile?.avatar}`} alt="" />
              </GroupImg>

              <GroupName>
                <Name>
                  {/* <Link to={`/tlu/group/${item.user_friend.id}`}>
                    {item.user_friend.username}
                  </Link> */}
                </Name>
                {/* <Des>{item.user_friend.description}</Des> */}
              </GroupName>
            </ProfileGroup>
          </TitleGroup>
          <ContentMessage>
            {messages?.data.map((message, index) => {
              return (
                <MessageContent
                  key={index}
                  content={message.message}
                  avatar={message?.user.avatar}
                  username={message?.user.username}
                  name={profile?.username}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </ContentMessage>

          <UsersJoined>
            <Comment>
              <ProfileImgComment>
                <img src={`${URL_IMAGE_USER}/${profile?.avatar}`} alt="" />
              </ProfileImgComment>
              <Form.Item
                style={{
                  marginBottom: "unset",
                  width: "100%",
                  padding: "0px 20px",
                }}
              >
                <CommentInput
                  className="search_chatbox"
                  type="text"
                  placeholder="Send Message"
                  value={message}
                  onChange={({ target: { value } }) => setMessage(value)}
                  onKeyPress={(event) =>
                    event.key === "Enter" ? sendMessage(event) : null
                  }
                  style={{
                    backgroundColor: "#f4f8f7",
                    height: "40px",
                    borderRadius: "20px",
                  }}
                />
              </Form.Item>
              <ButtonLike onClick={(e) => sendMessage(e)}>
                <SendOutlined />
              </ButtonLike>
            </Comment>
          </UsersJoined>
        </Left1>
      </Col1>
    </WrapperCol1>
  );
}

const ContentMessage = styled.div`
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 15px;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(223, 219, 219, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dfdfdf;
  }
`;
const ProfileImgComment = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ButtonLike = styled(Button)`
  border: none !important;
  padding: 5px;
  :hover,
  :focus,
  :active {
    border: none !important;
  }
  svg {
    width: 23px;
    height: 23px;
    color: #3d3e41;
    :hover {
      color: #ca0533;
    }
  }
`;

const CommentInput = styled(Input)`
  width: 100%;
  margin-bottom: 5px;
  margin-top: 10px;
  input {
    font-size: 13px;
    background-color: #f4f8f7;
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const GroupImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    object-fit: cover;
  }
`;

const GroupName = styled.div`
  padding: 0 10px;
`;

const ProfileGroup = styled.div`
  display: flex;
  padding: 20px 0px;
`;

const Name = styled.div`
  font-weight: 700;
  a {
    color: #ca0533;
  }
`;

const UsersJoined = styled.div`
  position: absolute;
  bottom: 0;
  width: 97%;
`;

const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebedf3;
  padding-bottom: 15px;
  align-items: center;
`;

const WrapperCol1 = styled.div`
  flex-basis: 350px;
  flex: 1;
  margin-left: 50px;
`;

const Left1 = styled.div`
  background: white;
  width: auto;
  height: 800px;
  border-radius: 10px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  padding: 15px;
`;
const Col1 = styled.div`
  position: relative;
`;
