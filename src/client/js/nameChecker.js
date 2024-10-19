export const isValidUrl = (url) => {
  const regex = /^(https?:\/\/)([a-z0-9-]+(\.[a-z0-9-]+)+)(\/[a-z0-9#]+\/?)*$/i;
  return regex.test(url);
};