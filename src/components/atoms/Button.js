import React from "react";
import styled from "styled-components/native";

import IconText from "./IconText";

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.BUTTON_BACKGROUND_COLOR};
  border-radius: 4px;
  justify-content: center;
  height: 60px;
  padding: 0 16px;
`;

const Text = styled(IconText)``;

const Button = ({ onPress, style, ...otherProps }) => {
  return (
    <Container onPress={onPress} style={style}>
      <Text {...otherProps} />
    </Container>
  );
};

export default Button;
