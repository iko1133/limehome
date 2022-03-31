import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: darkgray;
  height: 1px;
  margin: 8px 0;
  width: 100%;
`;

const Divider = (props) => {
  return <Container />;
};

export default Divider;
