import propertiesApiHandler from "store/api/properties/propertiesApiHandler";

export const getPropertiesList =
  (cityId = 32, adults = 1) =>
  async (dispatch) => {
    try {
      const data = await propertiesApiHandler.getPropertiesList({
        cityId,
        adults,
      });

      if (data && data.success) return data.payload;
      return null;
    } catch (error) {
      console.log("Error while trying to get properties: ", error);
      return null;
    }
  };

export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    const data = await propertiesApiHandler.getPropertyDetails(id);

    if (data && data.success) return data.payload;
    return null;
  } catch (error) {
    console.log("Error while trying to get property details: ", error);
    return null;
  }
};
