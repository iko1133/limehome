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

const Tag = ({ text, style }) => {
  return (
    <TagContainer style={style}>
      <TagText>{text}</TagText>
    </TagContainer>
  );
};

export default Tag;
