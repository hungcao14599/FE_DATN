import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentByPost } from "../../actions/comment";

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
