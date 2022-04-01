import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Text = styled.Text``;

/**
 * A text accompanied by icon
 * @param {string} text - the text displayed by the component
 * @param {string} iconName - the name of one of the MaterialIcons icon to be shown by the component
 * @param {object} textStyle - styling of the text
 * @param {object} style - styling of the component container
 * @param {float} iconSize - size of the icon (Defaults to 24)
 * @param {color} iconColor - color of the icon (Defaults to theme.SPECIAL_TEXT_COLOR)
 * @param {boolean} iconLeft - whether icon should be on the left or the right of the text
 */

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
