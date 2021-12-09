import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";

export default function PostList({ items }) {
  return (
    <div>
      <UL>
        {(items ? items.data : []).map((item, i) => (
          <li key={i}>
            <PostItem data={item} id={item.id} />
          </li>
        ))}
      </UL>
    </div>
  );
}

const UL = styled.ul`
  list-style: none;
  padding: 0;
`;
