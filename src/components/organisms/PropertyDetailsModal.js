import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import Button from "atoms/Button";
import CloseButton from "atoms/CloseButton";
import Divider from "atoms/Divider";
import IconText from "atoms/IconText";
import ImagesCarousel from "molecules/ImagesCarousel";
import Tag from "atoms/Tag";

const Modal = styled.Modal``;

const InnerContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
`;

const ModalCloseButton = styled(CloseButton)`
  left: 12px;
  top: 12px;
  position: absolute;
`;

const DetailsContainer = styled.View`
  padding: 20px 12px;
`;

const TopInfoContainer = styled.View`
  flex-direction: row;
`;

const TopLeftInfoContainer = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const PropertyLocationText = styled(IconText)``;

const PropertyRatingText = styled(IconText)`
  border: 1px solid ${({ theme }) => theme.DEFAULT_BORDER_COLOR};
  border-radius: 6px;
  padding: 6px;
`;

const Description = styled.Text`
  margin: 12px 0;
  line-height: 24px;
  font-size: 15px;
`;

const AvailableOptionsLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 4px 0 12px 0;
`;

const TagsContainer = styled.View`
  margin: 0 -2px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const OptionsTag = styled(Tag)`
  margin: 2px;
`;

const Footer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.DARKER_BACKGROUND_COLOR};
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
`;

const PropertyPriceFromLabel = styled.Text``;

const PropertyPriceText = styled.Text`
  color: ${({ theme }) => theme.SPECIAL_TEXT_COLOR};
`;

/**
 * A modal showing a the information of the property given
 * @param {boolean} visible - a boolean, indicating whether the modal is visible or not
 * @param {object} propertyDetails - an object containing the information of the property displayed by the component
 * @param {function} toggleModalVisibility - a function to toggle modal visibility
 */

const PropertyDetailsModal = ({
  visible,
  propertyDetails = {},
  toggleModalVisibility,
}) => {
  return (
    <Modal visible={visible}>
      <InnerContainer showsVerticalScrollIndicator={false}>
        {visible && <ImagesCarousel images={propertyDetails.images} />}
        <ModalCloseButton onPress={toggleModalVisibility} />

        <DetailsContainer>
          <TopInfoContainer>
            <TopLeftInfoContainer>
              <Name>{propertyDetails.name}</Name>

              <PropertyLocationText
                text={`${Math.round(
                  propertyDetails.distance
                )} km from city center`}
                iconName="location-pin"
              />
            </TopLeftInfoContainer>

            <PropertyRatingText
              text="4.5"
              iconName="star"
              iconSize={26}
              iconLeft={false}
              textStyle={styles.propertyRatingTextStyle}
            />
          </TopInfoContainer>

          <Description>{propertyDetails.description}</Description>

          <Divider />

          <AvailableOptionsLabel>
            Room types available in this location
          </AvailableOptionsLabel>

          <TagsContainer>
            {propertyDetails.unit_groups?.map((group) => (
              <OptionsTag key={`tag_${group.id}`} text={group.title} />
            ))}
          </TagsContainer>
        </DetailsContainer>
      </InnerContainer>

      <Footer>
        <PropertyPriceFromLabel>
          From{" "}
          <PropertyPriceText>
            {(propertyDetails.lowest_price_per_night ?? 0).toFixed(2)}
            €/Night
          </PropertyPriceText>
        </PropertyPriceFromLabel>

        <Button
          text="EXPLORE"
          iconLeft={false}
          iconName="arrow-forward"
          textStyle={styles.exploreButtonTextStyle}
          iconColor="white"
        />
      </Footer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  propertyRatingTextStyle: { fontSize: 20, fontWeight: "bold" },
  exploreButtonTextStyle: { color: "white" },
});

export default PropertyDetailsModal;
