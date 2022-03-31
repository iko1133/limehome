import config from "./config";
import client from "../client";

const getPropertiesList = (data) => {
  return client.get(`${config.propertiesList}`, data);
};

const getPropertyDetails = (id) => {
  return client.get(`${config.propertyDetails}${id}`);
};

export default {
  getPropertiesList,
  getPropertyDetails,
};
