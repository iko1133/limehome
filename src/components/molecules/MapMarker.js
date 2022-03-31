import React from "react";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";

const Container = styled(Marker)`
  align-items: center;
`;

const MarkerContainer = styled.View`
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.SELECTED_MARKER_BACKGROUND_COLOR
      : theme.MARKER_BACKGROUND_COLOR};
  border-radius: ${({ isSelected }) => (isSelected ? 10 : 6)}px;
  padding: 12px 8px;
`;

const MarkerText = styled.Text`
  color: ${({ theme }) => theme.MARKER_TEXT_COLOR};
  font-size: 14px;
  font-weight: 400;
`;

const ArrowDown = styled.View`
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.SELECTED_MARKER_BACKGROUND_COLOR
      : theme.MARKER_BACKGROUND_COLOR};
  height: 10px;
  margin-top: -5px;
  transform: rotate(45deg);
  width: 10px;
`;

const MapMarker = ({ property, onPress, isSelected, ...otherProps }) => {
  return (
    <Container coordinate={property.location} onPress={onPress} {...otherProps}>
      <MarkerContainer isSelected={isSelected}>
        <MarkerText>{10}€</MarkerText>
      </MarkerContainer>
      <ArrowDown isSelected={isSelected} />
    </Container>
  );
};

export default MapMarker;
