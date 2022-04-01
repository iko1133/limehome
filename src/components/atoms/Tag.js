import React from "react";
import styled from "styled-components/native";

const TagContainer = styled.View`
  background-color: ${({ theme }) => theme.TAG_BACKGROUND_COLOR};
  border-radius: 6px;
  padding: 4px;
`;

const TagText = styled.Text`
  color: ${({ theme }) => theme.TAG_TEXT_COLOR};
`;

/**
 * A component that represents the tag
 * @param {string} text - text to be displayed by the tag
 * @param {object} style - styling of the tag container
 */

const Tag = ({ text, style }) => {
  return (
    <TagContainer style={style}>
      <TagText>{text}</TagText>
    </TagContainer>
  );
};

export default Tag;
