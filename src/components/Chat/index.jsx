import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserById } from "../../actions/user";
import Header from "../Header";
import ChatLeft from "./ChatLeft";
import MessageBox from "./MessageBox";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { createMessage } from "../../actions/message";

const ENDPOINT = "http://localhost:3000/";
let socket;

export default function Chats() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);
  const profile = useSelector((state) => state.user.fetchUserByID.result.data);

  const [message, setMessage] = useState("");

  const params = useParams();

  useEffect(() => {
    socket = io(ENDPOINT);
    const room = params.id;
    socket.emit("join", { name: profile?.username, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [params.id, profile?.username]);

  useEffect(() => {
    socket.on("message", (response) => {
      if (response.chatID === +params.id) {
        dispatch(createMessage(response));
      }
    });
  }, [dispatch, params.id]);
  const sendMessage = (event) => {
    event.preventDefault();
    const room = params.id;
    if (message) {
      socket.emit(
        "sendMessage",
        { name: profile?.username, message, room },
        () => setMessage("")
      );
    }
  };

  return (
    <Wrapper>
      <Container>
        <Header profile={profile} />
        <Contents>
          <ChatLeft />
          <MessageBox
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Contents>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 20px;
  height: auto;
  background: #fff;
`;

const Container = styled.div`
  padding: 20px;
  background: #f9fafb;
  border-radius: 15px;
  box-shadow: 0 13px 49px 0 rgb(40 40 40 / 10%);
  height: 100vh;
`;

const Contents = styled.div`
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
`;
