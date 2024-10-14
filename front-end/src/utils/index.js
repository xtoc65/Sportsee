export function getUrl(url) {
  const isLive = process.env.REACT_APP_IS_LIVE;
  if (isLive === "true") {
    return `http://localhost:3000/${url}`;
  }

  return `/${url}.json`;
}