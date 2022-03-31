export const fixObjectLocationProperty = (object) => ({
  ...object,
  location: {
    ...object.location,
    longitude: object.location?.lng,
    latitude: object.location?.lat,
  },
});
