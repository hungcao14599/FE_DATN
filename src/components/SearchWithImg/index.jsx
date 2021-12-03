import { Input } from "antd";
import React from "react";
import styled from "styled-components";
import Avatar from "../../assets/img/avatar.jpeg";

export default function SearchWithImg() {
  return (
    <div>
      <SearchBar>
        <Input
          placeholder="What's new, Minh?"
          style={{
            // width: "100%",
            border: "none",
            height: "40px",
            paddingLeft: "43px",
            borderRadius: "10px",
            boxShadow: "4.5px 7.8px 45px 0 rgba(34, 34, 34, 0.05)",
          }}
        />
        {/* <SearchIcon>
          {Avatar && (
            <img
              src={Avatar}
              alt=""
              width="12%"
              height="12%"
              style={{ borderRadius: "10px" }}
            />
          )}
        </SearchIcon> */}
      </SearchBar>
    </div>
  );
}

const SearchBar = styled.div`
  /* width: 373px; */
  border-radius: 10px;
  background: #fff;
`;
const SearchIcon = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  transform: rotateY(180deg);
`;
