import { Button, Modal } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import imgSearch from "../../assets/svg/search_icon.svg";
import Logo from "../../assets/svg/social-media.svg";
import Search from "../Search";
import { LogoutOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { CreateGroup } from "../Group/CreateGroup";

export default function Header({ profile }) {
  const [search, setSearch] = useState();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("../tlu/login");
  };
  const [isShow, setIsShow] = useState(false);

  const handleShowAddGroup = () => {
    setIsShow(!isShow);
  };

  const handleOk = () => {
    setIsShow(false);
  };

  const handleCancel = () => {
    setIsShow(false);
  };
  return (
    <Container>
      <HeaderImg>
        <Link to="/tlu/home">
          <Image>
            <img src={Logo} alt="" style={{ color: "#ca0533" }} />
          </Image>
          <TitleLogo>TLU Social Network</TitleLogo>
        </Link>
      </HeaderImg>
      <SearchBar>
        <div>
          <Search
            imgSearch={imgSearch}
            value={search}
            onChange={setSearch}
            setSearch={setSearch}
          />
        </div>
        <ButtonAdd>
          <Button icon={<PlusCircleOutlined />} onClick={handleShowAddGroup}>
            Create
          </Button>
        </ButtonAdd>
        <ButtonLogout>
          <Button onClick={handleLogout} icon={<LogoutOutlined />}>
            Logout
          </Button>
        </ButtonLogout>
        <Image>
          <img
            src={`http://localhost:3000/api/users/image/${profile?.avatar}`}
            alt=""
          />
        </Image>
      </SearchBar>

      <Modal
        title="Basic Modal"
        visible={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreateGroup />
      </Modal>
    </Container>
  );
}

const HeaderImg = styled.div`
  a {
    display: flex;
    align-items: center;
  }
`;

const Image = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 10px;
    /* border: 1px solid #bec3c9; */
  }
`;
const ButtonLogout = styled.div`
  z-index: 10;
  margin-left: 10px;
  button {
    background: #f7341b;
    height: 100%;
    border-radius: 10px;
    span {
      color: #fff;
    }
    :hover,
    :active,
    :focus {
      background: #376e37;
    }
  }
`;
const ButtonAdd = styled.div`
  z-index: 10;
  margin-left: 10px;
  button {
    background: #ca0533;
    height: 100%;
    border-radius: 10px;
    span {
      color: #fff;
    }
    :hover,
    :active,
    :focus {
      background: #ca0533;
    }
  }
`;
const TitleLogo = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;
  color: #082850;
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: end;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 0px 0px 20px 0px;
  border-bottom: 1px solid #ebedf3;
`;
