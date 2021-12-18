import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { animated } from "react-spring";
import styled from "styled-components";
import { loginUser } from "../../actions/auth";
import { VerifyAccount } from "./VerifyAccount";

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

const WrapInput = styled.div`
  margin-top: 20px;
`;

const SigninInput = styled(Input)`
  width: 450px;
  height: 45px;
  margin-bottom: 5px;
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
  margin-bottom: unset;
`;

const Des = styled.p`
  color: grey;
  margin-top: 20px;
  text-align: center;
`;

const Activate = styled.p`
  color: grey;
  margin-top: 20px;
`;

const ButtonActivate = styled.span`
  color: #ca0533;
  cursor: pointer;
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

const Error = styled.span`
  color: #ca0533;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
`;

export const SignInForm = ({ style = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const history = useHistory();

  const error = useSelector((state) => state.auth.loginUser.error);
  const dispatch = useDispatch();
  const handleSignIn = handleSubmit((data) => {
    dispatch(loginUser(data.email, data.password)).then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      history.push("../tlu/home");
    });
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Wrapper style={style}>
        <Title>Sign in to TLU Social Network</Title>
        <Des>or use your email account</Des>
        <WrapInput>
          <Form.Item
            label="Email"
            extra="Enter email to login"
            help={errors.email && errors.email?.message}
            validateStatus={
              errors.email && errors.email?.message ? "error" : "validating"
            }
            style={{ display: "block" }}
          >
            <Controller
              control={control}
              name="email"
              rules={{ required: "Required" }}
              render={({ field: { value, onChange, onBlur } }) => (
                <SigninInput
                  type="email"
                  size="large"
                  {...{ value, onChange, onBlur }}
                  prefix={
                    <Logo>
                      <UserOutlined style={{ color: "grey" }} />
                    </Logo>
                  }
                  placeholder="Email"
                  style={{ backgroundColor: "#f4f8f7" }}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            extra="Enter password to login"
            help={errors.password && errors.password?.message}
            validateStatus={
              errors.password && errors.password?.message
                ? "error"
                : "validating"
            }
            style={{ display: "block" }}
          >
            <Controller
              control={control}
              name="password"
              rules={{ required: "Required" }}
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
                  style={{ backgroundColor: "#f4f8f7" }}
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
        <Error>{error ? error.data.message : ""}</Error>
        <Activate>
          Tài khoản chưa kích hoạt ?
          <ButtonActivate onClick={handleModal}> Kích hoạt</ButtonActivate>
        </Activate>
      </Wrapper>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <VerifyAccount />
      </Modal>
    </>
  );
};
