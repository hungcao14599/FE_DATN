import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCommentByPost } from "../../actions/comment";
import FeedBack from "./FeedBack";

export default function PostComment({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommentByPost(id, 10, 1));
  }, [dispatch, id]);

  const comments = useSelector(
    (state) => state.comment.fetchCommentByPost.result.data
  );

  return (
    <>
      {(comments ? comments.data : []).map((item, i) => {
        return <FeedBack data={item} key={i} postID={id} />;
      })}
    </>
  );
}
