export const getData = (url, setData) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json));
};
