import React from "react";
import { Button, Input, Form } from "antd";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { FileTextOutlined, GroupOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../../actions/group";

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
  padding: 25px 40px;
`;

const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  margin-top: 10px;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  width: 100%;
  span {
    margin: 0 auto;
  }
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

export const CreateGroup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { groupName: "", description: "", caption: "" },
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.group.addGroup.error);
  const success = useSelector((state) => state.group.addGroup.result);

  const handleAddGroup = handleSubmit((data) => {
    dispatch(addGroup(data.groupName, data.description, data.caption));
  });

  return (
    <Container>
      <RightModal>
        <Title style={{ fontSize: 25, marginBottom: "unset" }}>
          A New Group
        </Title>
        <Des style={{ marginTop: "unset" }}>
          Check your email to get the verification code.
        </Des>
        <Form.Item
          label="Group Name"
          extra="Group display name"
          help={errors.groupName && errors.groupName?.message}
          validateStatus={
            errors.groupName && errors.groupName?.message
              ? "error"
              : "validating"
          }
        >
          <Controller
            control={control}
            name="groupName"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size={"large"}
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <GroupOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Group Name"
                style={{
                  backgroundColor: "#f4f8f7",
                }}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          extra="Description of the group"
          help={errors.description && errors.description?.message}
          validateStatus={
            errors.description && errors.description?.message
              ? "error"
              : "validating"
          }
        >
          <Controller
            control={control}
            name="description"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size={"large"}
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <FileTextOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Description"
                style={{
                  backgroundColor: "#f4f8f7",
                }}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Caption"
          extra="Caption of the group"
          help={errors.caption && errors.caption?.message}
          validateStatus={
            errors.caption && errors.caption?.message ? "error" : "validating"
          }
        >
          <Controller
            control={control}
            name="caption"
            rules={{ required: "Required" }}
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                size={"large"}
                {...{ value, onChange, onBlur }}
                prefix={
                  <Logo>
                    <FileTextOutlined style={{ color: "grey" }} />
                  </Logo>
                }
                placeholder="Caption"
                style={{
                  backgroundColor: "#f4f8f7",
                }}
              />
            )}
          />
        </Form.Item>
        <ButtonConfirm type="default" size="large" onClick={handleAddGroup}>
          Create
        </ButtonConfirm>
        <Error style={{ color: success ? "#376e37" : "#ca0533" }}>
          {success ? success.message : error ? error.data.message : ""}
        </Error>
      </RightModal>
      <LeftModal>
        <Content>
          <ContentTitle>Create A New Group</ContentTitle>
          <ContentDes>
            Social network of irrigation university students
          </ContentDes>
        </Content>
      </LeftModal>
    </Container>
  );
};
