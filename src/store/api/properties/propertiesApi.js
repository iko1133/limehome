import config from "./config";
import client from "../client";

// Get request of properties list
const getPropertiesList = (data) => {
  return client.get(`${config.propertiesList}`, data);
};

// Get request of property details
const getPropertyDetails = (id) => {
  return client.get(`${config.propertyDetails}${id}`);
};

export default {
  getPropertiesList,
  getPropertyDetails,
};
