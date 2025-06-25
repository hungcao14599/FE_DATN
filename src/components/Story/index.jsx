import React from "react";
import styled from "styled-components";

export default function Story({ items }) {
  return (
    <WrapStory>
      {items.map((item, i) => (
        <Left3 key={i}>
          <ImgAds>
            {item.background}
            <AdsText>
              <p>{item.name}</p>
            </AdsText>
            <AvatarImg>{item.avatar}</AvatarImg>
          </ImgAds>
        </Left3>
      ))}
    </WrapStory>
  );
}

const WrapStory = styled.div`
  display: flex;
  width: fit-content;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AvatarImg = styled.div`
  position: absolute;
  top: 15px;
  left: 11px;
`;
const AdsText = styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
  font-weight: 700;
  left: 25px;
`;

const ImgAds = styled.div`
  margin-top: 10px;
  position: relative;
`;

const Left3 = styled.div`
  width: fit-content;
  height: auto;
  border-radius: 10px;
  padding: 0 5px;
`;
