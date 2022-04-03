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

/**
 * Default button component with icon in it
 * @param {function} onPress - a callback called when button is pressed
 * @param {object} style - styling of the button
 * @param {string} text - text written on the button
 * @param otherProps - props to be passed to IconText
 */

const Button = ({ onPress, style, text, ...otherProps }) => {
  return (
    <Container onPress={onPress} style={style}>
      <Text text={text} {...otherProps} />
    </Container>
  );
};

export default Button;
