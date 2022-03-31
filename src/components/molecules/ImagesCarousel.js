import React, { useRef, useState } from "react";
import { Dimensions, Platform } from "react-native";

import styled from "styled-components/native";

const PAGE_WIDTH = Dimensions.get("window").width;

const ImagesScrollContainer = styled.View``;

const ImagesScrollView = styled.ScrollView``;

const Image = styled.Image`
  aspect-ratio: 1.4;
  width: ${PAGE_WIDTH}px;
`;

const PaginationIndicatorContainer = styled.View`
  bottom: 20px;
  flex-direction: row;
  align-self: center;
  position: absolute;
`;

const ImageDot = styled.View`
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  border: 2px solid white;
  border-radius: 5px;
  height: 8px;
  margin: 0 2px;
  width: 8px;
`;

const ImagesCarousel = ({ images }) => {
  const [shownImageId, setShownImageId] = useState(0);

  const imagesScrollRef = useRef();
  const imagesScrollWidth = useRef(PAGE_WIDTH);
  const imagesScrollPositionX = useRef(0);

  const handleScroll = (event) => {
    const currX = event.nativeEvent.contentOffset.x;

    if (
      Math.round(currX / PAGE_WIDTH) !==
      Math.round(imagesScrollPositionX.current / PAGE_WIDTH)
    )
      setShownImageId(Math.round(currX / PAGE_WIDTH));

    imagesScrollPositionX.current = currX;
  };

  return (
    <ImagesScrollContainer>
      <ImagesScrollView
        ref={imagesScrollRef}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate={Platform.OS === "android" ? 0.8 : 0.9}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handleScroll(event)}
        scrollEventThrottle={16}
        onContentSizeChange={(w, h) => {
          imagesScrollWidth.current = w;
        }}
      >
        {images?.map((img, index) => (
          <Image key={`product_image_${index}`} source={{ uri: img.url }} />
        ))}
      </ImagesScrollView>

      <PaginationIndicatorContainer>
        {images?.map((img, index) => (
          <ImageDot
            key={`product_image_dot_${index}`}
            isSelected={index === shownImageId}
          />
        ))}
      </PaginationIndicatorContainer>
    </ImagesScrollContainer>
  );
};

export default ImagesCarousel;
