import handleFetch from "../handler";
import API from "./propertiesApi";

const getPropertiesList = (data) => {
  return new Promise((resolve, reject) => {
    return API.getPropertiesList(data)
      .then(handleFetch(resolve, reject).xthen)
      .catch(handleFetch(resolve, reject).xcatch);
  });
};

const getPropertyDetails = (data) => {
  return new Promise((resolve, reject) => {
    return API.getPropertyDetails(data)
      .then(handleFetch(resolve, reject).xthen)
      .catch(handleFetch(resolve, reject).xcatch);
  });
};

export default {
  getPropertiesList,
  getPropertyDetails,
};
