import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentByPost } from "../../actions/comment";
import FeedBack from "./FeedBack";

export default function PostComment({ id }) {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchCommentByPost(id, 10, 1));
  }, [dispatch, id]);

  const comments = useSelector(
    (state) => state.comment.fetchCommentByPost.result.data
  );

  return (
    <>
      {(comments ? comments.data : []).map((item, i) => {
        return <FeedBack data={item} key={i} />;
      })}
    </>
  );
}
