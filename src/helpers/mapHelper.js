// Copies given object, except, switches names of the location property's properties for the
// marker objects to function properly
// lgn to longitude
// lat to latitude
export const fixObjectLocationProperty = (object) => ({
  ...object,
  location: {
    ...object.location,
    longitude: object.location?.lng,
    latitude: object.location?.lat,
  },
});
