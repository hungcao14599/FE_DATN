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
    setLoading(true);
    dispatch(fetchCommentByPost(id, 10, 1)).then((res) => {
      const data = res ? res : [];
      setLoading(false);
      setItems(data);
    });
  }, [dispatch, id]);

  console.log("ii", items.data, typeof items.data);

  return (
    <>
      {loading &&
        (items ? items : []).map((item, i) => {
          return <FeedBack data={item} key={i} />;
        })}
    </>
  );
}
