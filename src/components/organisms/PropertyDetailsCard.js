import React from "react";
import styled from "styled-components/native";

import Divider from "atoms/Divider";
import IconText from "atoms/IconText";

const PropertyDetailsViewContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  border: 1px solid ${({ theme }) => theme.DEFAULT_BORDER_COLOR};
  border-radius: 4px;
  bottom: 40px;
  flex-direction: row;
  overflow: hidden;
  width: 90%;
  position: absolute;
`;

const PropertyImageContainer = styled.View`
  aspect-ratio: 1;
  height: 100%;
`;

const PropertyImage = styled.Image`
  height: 100%;
  width: 100%;
`;

const PropertyRatingContainer = styled.View`
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
  border-radius: 6px;
  right: 8px;
  top: 10px;
  padding: 4px 5px;
  position: absolute;
`;

const PropertyDescriptionContainer = styled.View`
  flex: 1;
  padding: 12px 12px;
`;

const PropertyName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const PropertyLocationText = styled(IconText)``;

const PropertyPriceFromLabel = styled.Text``;

const PropertyPriceText = styled.Text`
  color: ${({ theme }) => theme.SPECIAL_TEXT_COLOR};
`;

/**
 * A card showing a little bit of information of the property given
 * @param {object} propertyDetails - an object containing the information of the property displayed by the component
 * @param {function} onPress - a callback that's called when the card is pressed
 */

const PropertyDetailsCard = ({ propertyDetails, onPress }) => {
  return (
    <PropertyDetailsViewContainer onPress={onPress} activeOpacity={0.8}>
      <PropertyImageContainer>
        <PropertyImage
          source={{
            uri: propertyDetails.images[0]?.url,
          }}
        />

        <PropertyRatingContainer>
          <PropertyLocationText
            text="4.5"
            iconName="star"
            iconSize={18}
            iconLeft={false}
          />
        </PropertyRatingContainer>
      </PropertyImageContainer>

      <PropertyDescriptionContainer>
        <PropertyName>{propertyDetails.name}</PropertyName>

        <PropertyLocationText
          text={`${Math.round(propertyDetails.distance)} km from city center`}
          iconName="location-pin"
        />

        <Divider />

        <PropertyPriceFromLabel>
          From{" "}
          <PropertyPriceText>
            {(propertyDetails.lowest_price_per_night ?? 0).toFixed(2)}
            €/Night
          </PropertyPriceText>
        </PropertyPriceFromLabel>
      </PropertyDescriptionContainer>
    </PropertyDetailsViewContainer>
  );
};

export default PropertyDetailsCard;
