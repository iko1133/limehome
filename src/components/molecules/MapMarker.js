import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";

const COMPONENT_UPDATE_DELAY = 300;

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

/**
 * Marker component for the map that shows property price
 * @param {object} property - object describing the property that marker should display
 * @param {function} onPress - a callback that's called when the marker is pressed
 * @param {boolean} isSelected - a boolean indicating, whether marker is selected or not
 * @param {boolean} tracksViewChanges - a boolean indicating, whether the marker should account for tacking view changes
 */

const MapMarker = ({
  property,
  onPress,
  isSelected,
  tracksViewChanges,
  ...otherProps
}) => {
  const [shouldTrackViewChanges, setShouldTrackViewChanges] = useState(
    tracksViewChanges || isSelected
  );

  const disableTracking = () =>
    setTimeout(() => setShouldTrackViewChanges(false), COMPONENT_UPDATE_DELAY);

  // Sets tracking view changes enabled and then disables it after a certain delay to make performance better
  useEffect(() => {
    setShouldTrackViewChanges(true);

    disableTracking();
  }, [isSelected]);

  return (
    <Container
      coordinate={property.location}
      onPress={onPress}
      tracksViewChanges={shouldTrackViewChanges}
      {...otherProps}
    >
      <MarkerContainer isSelected={isSelected}>
        <MarkerText>{10}€</MarkerText>
      </MarkerContainer>
      <ArrowDown isSelected={isSelected} />
    </Container>
  );
};

export default MapMarker;
