import {
  FacebookOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { animated } from "react-spring";
import styled from "styled-components";

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Fb = styled.div``;
const Gg = styled.div`
  padding-left: 10px;
`;
const In = styled.div`
  padding-left: 10px;
`;
const SocialNet = styled.div`
  display: flex;
`;

const FbIcon = styled(FacebookOutlined)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
const GgIcon = styled(GooglePlusOutlined)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
const InIcon = styled(LinkedinOutlined)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
const WrapInput = styled.div`
  margin-top: 20px;
`;

const SigninInput = styled(Input)`
  width: 300px;
  height: 45px;
  input {
    font-size: 13px;
    background-color: #f4f8f7;
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const Title = styled.p`
  color: #ca0533;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const Des = styled.p`
  color: grey;
  margin-top: 20px;
`;

const Activate = styled.p`
  color: grey;
  margin-top: 20px;
`;

const ButtonSignIn = styled(Button)`
  background: #ca0533;
  color: white;
  width: 200px;
  height: 50px !important;
  margin-top: 10px;
  font-weight: 600;
  :hover,
  :active,
  :focus {
    background: #ca0533;
    color: white;
  }
`;
const Logo = styled.div`
  svg {
    width: 14px;
    height: 14px;
  }
`;
export const SignInForm = ({ style = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const handleSignIn = handleSubmit((data) => {
    console.log(data);
    // TODO: call api to login
  });
  return (
    <Wrapper style={style}>
      <Title>Sign in to TLU Social Network</Title>

      {/* <SocialNet>
        <Fb>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FbIcon style={{ color: "black" }} />
          </a>
        </Fb>
        <Gg>
          <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
            <GgIcon style={{ color: "black" }} />
          </a>
        </Gg>
        <In>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <InIcon style={{ color: "black" }} />
          </a>
        </In>
      </SocialNet> */}
      <Des>or use your email account</Des>

      <WrapInput>
        <Form.Item>
          <Controller
            control={control}
            name="username"
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size="large"
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <UserOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Username"
                style={{ backgroundColor: "#f4f8f7", border: "none" }}
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size="large"
                {...{ value, onChange, onBlur }}
                type="password"
                prefix={
                  <Logo>
                    <LockOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Password"
                style={{ backgroundColor: "#f4f8f7", border: "none" }}
              />
            )}
          />
        </Form.Item>
      </WrapInput>
      <ButtonSignIn
        type="default"
        size="large"
        shape="round"
        onClick={handleSignIn}
      >
        Sign In
      </ButtonSignIn>
      <Activate>Tài khoản chưa kích hoạt ?</Activate>
    </Wrapper>
  );
};
