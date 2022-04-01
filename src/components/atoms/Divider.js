import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: darkgray;
  height: 1px;
  margin: 8px 0;
  width: 100%;
`;

/**
 * A divider border between two blocks of views
 * @param {style} - styling of the button container
 */

const Divider = ({ style }) => {
  return <Container style={style} />;
};

export default Divider;
