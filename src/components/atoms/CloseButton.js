import React from "react";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView``;

const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  border-radius: 6px;
  height: 35px;
  justify-content: center;
  width: 35px;
`;

const CloseButtonX = styled.Text`
  font-size: 20px;
`;

/**
 * Default close button (with safeAreaView in mind)
 * @param {function} onPress - a callback called when button is pressed
 * @param {object} style - styling of the button container
 * @param {object} buttonStyle - styling of the button itself
 */

const CloseButton = ({ onPress, style, buttonStyle }) => {
  return (
    <SafeArea style={style}>
      <Container onPress={onPress} activeOpacity={0.8} style={buttonStyle}>
        <CloseButtonX>X</CloseButtonX>
      </Container>
    </SafeArea>
  );
};

export default CloseButton;
