import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Text = styled.Text``;

const IconText = ({
  text,
  iconName,
  textStyle,
  style,
  iconSize = 24,
  iconColor,
  iconLeft = true,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Container style={style}>
      {iconLeft && (
        <MaterialIcons
          name={iconName}
          size={iconSize}
          color={iconColor ?? theme.SPECIAL_TEXT_COLOR}
        />
      )}
      <Text style={textStyle}>{text}</Text>
      {!iconLeft && (
        <MaterialIcons
          name={iconName}
          size={iconSize}
          color={iconColor ?? theme.SPECIAL_TEXT_COLOR}
        />
      )}
    </Container>
  );
};

export default IconText;
