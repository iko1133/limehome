import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const Background = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  height: 100%;
  justify-content: center;
`;

const InnerContainer = styled.View`
  flex: 1;
`;

/**
 * A screen component, accounting for the most page needs to be wrapped in (like KeyboardAvoidingView)
 * @param {object} children - children object to be rendered under screen
 * @param {object} style - styling of the inner container
 */

const Screen = ({ children, style }) => {
  return (
    <Background behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <InnerContainer style={style}>{children}</InnerContainer>
      <StatusBar style={"dark"} />
    </Background>
  );
};

export default Screen;
