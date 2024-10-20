export const isValidUrl = (url) => {
  const regex = /^(https?:\/\/)([a-z0-9-]+\.)+[a-z]{2,6}(\/[\/\w .-]*)*\/?$/i;
  return regex.test(url);
};