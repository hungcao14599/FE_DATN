import React, { useEffect } from "react";
import { Button, Input, Form, DatePicker, Radio } from "antd";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import {
  FileDoneOutlined,
  HomeOutlined,
  PhoneOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../actions/user";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RightModal = styled.div`
  padding: 25px 25px 25px 40px;
`;

const ButtonConfirm = styled(Button)`
  background: #ca0533;
  color: white;
  margin-top: 10px;
  font-weight: 500;
  display: flex;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  :hover,
  :active,
  :focus {
    background: #ca0533;
    color: white;
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

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  margin-top: 40px;
`;
export const UpdateInfomation = ({ items }) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      description: "",
      address: "",
      phone: "",
      gender: "",
      birthday: "",
    },
  });

  const dispatch = useDispatch();
  const personalInformation = useSelector(
    (state) => state.user.updateUserInfo.result
  );
  const handleUpdateInfomation = handleSubmit((data) => {
    dispatch(
      updateUserInfo(
        data.firstname,
        data.lastname,
        data.phone,
        data.birthday.toISOString().slice(0, 10),
        data.gender,
        data.description,
        data.address
      )
    );
  });

  useEffect(() => {
    const fields = [
      "firstname",
      "lastname",
      "description",
      "address",
      "gender",
      "birthday",
      "phone",
    ];
    fields.forEach((field) => setValue(field, items[field]));
  }, [items, setValue]);

  const birthday = watch("birthday");

  useEffect(() => {
    setValue("birthday", birthday);
  }, [birthday, setValue]);

  useEffect(() => {
    if (touchedFields.birthday) {
      trigger(["birthday"]);
    }
  }, [touchedFields.birthday, trigger]);

  return (
    <Container>
      <RightModal>
        <Title style={{ fontSize: 25, marginBottom: "unset" }}>
          Update Infomation
        </Title>
        <Des style={{ marginTop: "unset" }}>
          Check your email to get the verification code.
        </Des>
        <Layout>
          <div>
            <Form.Item
              style={{ display: "block" }}
              label="Firstname"
              extra="Update information firstname"
              help={errors.firstname && errors.firstname?.message}
              validateStatus={
                errors.firstname && errors.firstname?.message
                  ? "error"
                  : "validating"
              }
            >
              <Controller
                control={control}
                name="firstname"
                rules={{ required: "Required" }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <SigninInput
                    size={"middle"}
                    {...{ value, onChange, onBlur }}
                    prefix={
                      <Logo>
                        <UserAddOutlined style={{ color: "grey" }} />
                      </Logo>
                    }
                    // placeholder="Email"
                    style={{
                      backgroundColor: "#f4f8f7",

                      height: 38,
                    }}
                  />
                )}
              />
            </Form.Item>
            <Form.Item
              style={{ display: "block" }}
              label="Lastname"
              extra="Update information lastname"
              help={errors.lastname && errors.lastname?.message}
              validateStatus={
                errors.lastname && errors.lastname?.message
                  ? "error"
                  : "validating"
              }
            >
              <Controller
                control={control}
                name="lastname"
                rules={{ required: "Required" }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <SigninInput
                    size={"middle"}
                    {...{ value, onChange, onBlur }}
                    prefix={
                      <Logo>
                        <UserDeleteOutlined style={{ color: "grey" }} />
                      </Logo>
                    }
                    placeholder="VerifyCode"
                    style={{
                      backgroundColor: "#f4f8f7",

                      height: 38,
                    }}
                  />
                )}
              />
            </Form.Item>
            <Form.Item
              style={{ display: "block" }}
              label="Description"
              extra="Update information description"
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
                    size={"middle"}
                    {...{ value, onChange, onBlur }}
                    prefix={
                      <Logo>
                        <FileDoneOutlined style={{ color: "grey" }} />
                      </Logo>
                    }
                    placeholder="VerifyCode"
                    style={{
                      backgroundColor: "#f4f8f7",

                      height: 38,
                    }}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              style={{ display: "block" }}
              label="Address"
              extra="Update information address"
              help={errors.address && errors.address?.message}
              validateStatus={
                errors.address && errors.address?.message
                  ? "error"
                  : "validating"
              }
            >
              <Controller
                control={control}
                name="address"
                rules={{ required: "Required" }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <SigninInput
                    size={"middle"}
                    {...{ value, onChange, onBlur }}
                    prefix={
                      <Logo>
                        <HomeOutlined style={{ color: "grey" }} />
                      </Logo>
                    }
                    placeholder="VerifyCode"
                    style={{
                      backgroundColor: "#f4f8f7",

                      height: 38,
                    }}
                  />
                )}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              style={{ display: "block" }}
              label="Phone"
              extra="Update information phone"
              help={errors.phone && errors.phone?.message}
              validateStatus={
                errors.phone && errors.phone?.message ? "error" : "validating"
              }
            >
              <Controller
                control={control}
                name="phone"
                rules={{ required: "Required" }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <SigninInput
                    size={"middle"}
                    {...{ value, onChange, onBlur }}
                    prefix={
                      <Logo>
                        <PhoneOutlined style={{ color: "grey" }} />
                      </Logo>
                    }
                    placeholder="VerifyCode"
                    style={{
                      backgroundColor: "#f4f8f7",

                      height: 38,
                    }}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              style={{ display: "block" }}
              label="Gender"
              extra="Update information gender"
              help={errors.gender && errors.gender?.message}
              validateStatus={
                errors.gender && errors.gender?.message ? "error" : "validating"
              }
              name="gender"
            >
              <Controller
                control={control}
                name="gender"
                rules={{ required: "Required" }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Radio.Group {...{ value, onChange, onBlur }}>
                    <Radio value={1}>Male</Radio>
                    <Radio value={0}>Female</Radio>
                  </Radio.Group>
                )}
              />
            </Form.Item>

            <Form.Item
              style={{ display: "block" }}
              label="Birthday"
              extra="Update information birthday"
              help={errors.birthday && errors.birthday?.message}
              validateStatus={
                errors.birthday && errors.birthday?.message
                  ? "error"
                  : "validating"
              }
              name="birthday"
            >
              <FormControl
                control={control}
                placeholder="12/22/2021, 9:00 PM EST"
                name="birthday"
                rules={{
                  required: "Required",
                }}
              />
            </Form.Item>
            <div>
              <ButtonConfirm
                type="default"
                size="large"
                onClick={handleUpdateInfomation}
                style={{ float: "right", marginTop: 32 }}
                icon={<UploadOutlined />}
              >
                Update
              </ButtonConfirm>
              <Success>{personalInformation?.message}</Success>
            </div>
          </div>
        </Layout>
      </RightModal>
    </Container>
  );
};

const FormControl = ({ control, name, placeholder, rules }) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, onBlur, value } }) => {
      return (
        <DatePicker
          placeholder={placeholder}
          onBlur={onBlur}
          value={value}
          onChange={(_) => {
            onChange(_ ? _ : "");
          }}
        />
      );
    }}
  />
);

const Success = styled.span`
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: #376e37;
`;
