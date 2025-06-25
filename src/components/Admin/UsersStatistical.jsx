import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNumOfUserByMonth } from "../../actions/user";
import { useSelector } from "react-redux";
import UsersLineCharts from "./UsersLineCharts";
import UsersColCharts from "./UsersColCharts";
import styled from "styled-components";
export default function UsersStatistical() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNumOfUserByMonth());
  }, [dispatch]);
  const NumOfUser = useSelector(
    (state) => state.user.fetchNumOfUserByMonth.result
  );
  const data = NumOfUser?.data || [];

  return (
    <Statistical>
      <UsersLineCharts data={data} />
      <UsersColCharts data={data} />
    </Statistical>
  );
}

const Statistical = styled.div`
  display: flex;
  align-items: baseline;
`;
