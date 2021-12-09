import { Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import imgSearch from "../../assets/svg/search_icon.svg";
import Logo from "../../assets/svg/social-media.svg";

import Search from "../Search";
import Avatar from "../../assets/img/avatar.jpeg";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Header({ profile }) {
  const [search, setSearch] = useState();

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
          <Button icon={<PlusCircleOutlined />}>Create</Button>
        </ButtonAdd>
        <Image>
          <img src={profile?.avatar} alt="" />
        </Image>
      </SearchBar>
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
    border-radius: 10px;
    object-fit: cover;
    margin-left: 10px;
  }
`;

const ButtonAdd = styled.div`
  z-index: 10;
  margin-left: 10px;
  button {
    background: #ca0533;
    height: 100%;
    border-radius: 15px;
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
