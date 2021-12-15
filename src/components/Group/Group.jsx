import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import GroupHeader from "./GroupHeader";
import { fetchGroupById, fetchUserJoinGroup } from "../../actions/group";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  padding: 20px;
  height: auto;
  background: #fff;
`;
const Container = styled.div`
  padding: 20px;
  background: #f9fafb;
  border-radius: 15px;
`;

export default function Group() {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchGroupById(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchUserJoinGroup({ id: params.id, size: 20, page: 1 }));
  }, [dispatch, params.id]);

  const groupByID = useSelector((state) => state.group.fetchGroupById.result);

  const profile = useSelector((state) => state.user.fetchUserByID.result.data);

  return (
    <Wrapper>
      <Container>
        <Header profile={profile} />
        <GroupHeader groupData={groupByID?.data} />
      </Container>
    </Wrapper>
  );
}
