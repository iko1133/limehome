import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import MapView from "react-native-maps";

import {
  getPropertiesList,
  getPropertyDetails,
} from "store/actions/properties";

import { MAP_DEFAULT_COORDINATES } from "config/constants";
import { fixObjectLocationProperty } from "helpers/mapHelper";
import MapMarker from "molecules/MapMarker";
import Screen from "atoms/Screen";
import PropertyDetailsModal from "organisms/PropertyDetailsModal";
import PropertyDetailsCard from "organisms/PropertyDetailsCard";

const Container = styled(Screen)`
  align-items: center;
`;

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

/**
 * A component that shows the map of different homes that can be visited
 */

const MapScreen = () => {
  const dispatch = useDispatch();

  const [properties, setProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(undefined);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  const [propertyDetails, setPropertyDetails] = useState({});

  // Toggles details' modal visibility
  const toggleModalVisibility = () =>
    setDetailsModalVisible(!detailsModalVisible);

  // Loads properties list and saves it to local state
  const loadProperties = useCallback(async () => {
    const result = await dispatch(getPropertiesList());

    if (result) setProperties(result.map(fixObjectLocationProperty));
  }, []);

  // Loads given property's details and saves it to local state
  const loadPropertyDetails = useCallback(async (id) => {
    setPropertyDetails({}); // Clear old details

    const result = await dispatch(getPropertyDetails(id));

    if (result) setPropertyDetails(result);
  }, []);

  // Starts loading of the currently selected property's details if modal visibility = true is detected
  useEffect(() => {
    if (!detailsModalVisible) return;

    loadPropertyDetails(properties[selectedPropertyId].id);
  }, [detailsModalVisible]);

  // Starts loading of properties list when component is mounted
  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <Container>
      <Map provider="google" initialRegion={MAP_DEFAULT_COORDINATES}>
        {properties.map((property, index) => (
          <MapMarker
            property={property}
            onPress={() => setSelectedPropertyId(index)}
            isSelected={selectedPropertyId === index}
            key={`property_marker_${property.id}`}
          />
        ))}
      </Map>

      {selectedPropertyId && (
        <PropertyDetailsCard
          propertyDetails={properties[selectedPropertyId]}
          onPress={toggleModalVisibility}
        />
      )}

      <PropertyDetailsModal
        visible={detailsModalVisible}
        propertyDetails={propertyDetails}
        toggleModalVisibility={toggleModalVisibility}
      />
    </Container>
  );
};

export default MapScreen;
