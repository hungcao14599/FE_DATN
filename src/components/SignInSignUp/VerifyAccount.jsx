import React from "react";
import { Button, Input, Form } from "antd";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { verifyAccount } from "../../actions/user";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftModal = styled.div`
  background: url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightModal = styled.div`
  padding: 25px;
`;

const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  margin-top: 10px;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  margin: 0 auto;
  :hover,
  :active,
  :focus {
    background: #ca0533;
    color: white;
  }
`;

const Content = styled.div`
  display: block;
`;

const ContentTitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const ContentDes = styled.p`
  color: #fff;
  font-size: 13px;
  text-align: center;
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
  text-align: center;
`;

const SigninInput = styled(Input)`
  width: 300px;
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

const Logo = styled.div`
  svg {
    width: 14px;
    height: 14px;
  }
`;

const Error = styled.span`
  font-size: 13px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const VerifyAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", verifyCode: "" },
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.verifyAccount.error);
  const success = useSelector((state) => state.user.verifyAccount.result);

  const handleVerifyAccount = handleSubmit((data) => {
    dispatch(verifyAccount(data.verifyCode, data.email));
  });

  return (
    <Container>
      <LeftModal>
        <Content>
          <ContentTitle>TLU Social Network</ContentTitle>
          <ContentDes>
            Social network of irrigation university students
          </ContentDes>
        </Content>
      </LeftModal>
      <RightModal>
        <Title style={{ fontSize: 25, marginBottom: "unset" }}>
          Active Account
        </Title>
        <Des style={{ marginTop: "unset" }}>
          Check your email to get the verification code.
        </Des>
        <Form.Item
          help={errors.email && errors.email?.message}
          validateStatus={
            errors.email && errors.email?.message ? "error" : "validating"
          }
        >
          <Controller
            control={control}
            name="email"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size={"middle"}
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <UserOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Email"
                style={{
                  backgroundColor: "#f4f8f7",
                  border: "none",
                  height: 38,
                }}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          help={errors.verifyCode && errors.verifyCode?.message}
          validateStatus={
            errors.verifyCode && errors.verifyCode?.message
              ? "error"
              : "validating"
          }
        >
          <Controller
            control={control}
            name="verifyCode"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size={"middle"}
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <LockOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="VerifyCode"
                type={"number"}
                style={{
                  backgroundColor: "#f4f8f7",
                  border: "none",
                  height: 38,
                }}
              />
            )}
          />
        </Form.Item>
        <ButtonConfirm
          type="default"
          size="large"
          onClick={handleVerifyAccount}
        >
          Confirm
        </ButtonConfirm>
        <Error style={{ color: success ? "#376e37" : "#ca0533" }}>
          {success ? success.message : error ? error.data.message : ""}
        </Error>
      </RightModal>
    </Container>
  );
};
