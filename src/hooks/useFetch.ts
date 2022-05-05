
// interface GetDataProps {
//   url: string,
//   setData: (a: ) => void
// }

export const getData = (url:string, setData:any) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
};
