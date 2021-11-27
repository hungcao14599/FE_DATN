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
import { useDispatch, useSelector } from "react-redux";
import { animated } from "react-spring";
import styled from "styled-components";
import { registerUser } from "../../actions/auth";

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

const Title = styled.p`
  color: #f7341b;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const Des = styled.p`
  color: grey;
  margin-top: 20px;
`;

const LoginNotification = styled.p`
  color: grey;
  margin-top: 20px;
`;

const ButtonSignUp = styled(Button)`
  background: #f7341b;
  color: white;
  width: 200px;
  height: 50px !important;
  margin-top: 10px;
  font-weight: 600;
  :hover,
  :active,
  :focus {
    background: #f7341b;
    color: white;
  }
`;

const SignUpInput = styled(Input)`
  width: 300px;
  height: 45px;
  background-color: #f4f8f7 !important;
  border: none;
  input {
    font-size: 13px;
    background-color: #f4f8f7;
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const Logo = styled.div`
  svg {
    width: 14px;
    height: 14px;
  }
`;

const Error = styled.span`
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
`;

export const SignUpForm = ({ style = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.registerUser.error);
  const success = useSelector((state) => state.auth.registerUser.result);

  const handleSignUp = handleSubmit((data) => {
    dispatch(registerUser(data.username, data.password, data.email));
    console.log(data);
    // TODO: call api to sign up
  });

  return (
    <Wrapper style={style}>
      <Title>Create Account TLU Social Network</Title>
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
      <Des>Join the social network to experience</Des>
      <WrapInput>
        <Form.Item
          help={errors.email && errors.email?.message}
          validateStatus={
            errors.email && errors.email?.message ? "error" : "validating"
          }
        >
          <Controller
            type={"email"}
            rules={{ required: "Required" }}
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <SignUpInput
                size="large"
                prefix={
                  <Logo>
                    <LockOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Email"
                {...{ value, onChange, onBlur }}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          help={errors.username && errors.username?.message}
          validateStatus={
            errors.username && errors.username?.message ? "error" : "validating"
          }
        >
          <Controller
            control={control}
            name="username"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SignUpInput
                size="large"
                prefix={
                  <Logo>
                    <UserOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Username"
                {...{ value, onChange, onBlur }}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          help={errors.password && errors.password?.message}
          validateStatus={
            errors.password && errors.password?.message ? "error" : "validating"
          }
        >
          <Controller
            control={control}
            name="password"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SignUpInput
                size="large"
                prefix={
                  <Logo>
                    <LockOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Password"
                {...{ value, onChange, onBlur }}
                type="password"
              />
            )}
          />
        </Form.Item>
      </WrapInput>
      <ButtonSignUp
        type="default"
        size="large"
        shape="round"
        onClick={handleSignUp}
      >
        Sign Up
      </ButtonSignUp>
      <Error style={{ color: success ? "#376e37" : "#ca0533" }}>
        {success ? success.message : error ? error.data.message : ""}
      </Error>
      <LoginNotification>Đăng nhập nếu có tài khoản !</LoginNotification>
    </Wrapper>
  );
};
