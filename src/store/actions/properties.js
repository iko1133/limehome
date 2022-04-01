import propertiesApiHandler from "store/api/properties/propertiesApiHandler";

/**
 * A function that returns list of properties filtered by cityId and adults count
 * @param {integer} cityId - the id of the city the results to be filtered with
 * @param {integer} adults - the amount of adults spaces available in the property
 * @returns an action to return list of properties or null if unsuccessful
 */
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

/**
 * A function that returns details of the property the given id belongs to
 * @param {integer} id - the id of the property
 * @returns an action to return details of property or null if unsuccessful
 */
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
