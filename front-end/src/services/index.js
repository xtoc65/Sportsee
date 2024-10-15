import { useEffect, useState } from "react";

import { getUrl } from "../utils";

export function useFetch(params) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(getUrl(params.url));
        const json = await response.json();
  
        if (params.resource === "activities") setData(json.data.sessions);
  
        if (params.resource === "averages") setData(json.data.sessions);
  
        if (params.resource === "performances") setData(json.data);
  
        if (params.resource === "users") setData(json.data);        
      } catch (error) {
        console.log("je suis dans le catch")
        setData({hasError: true, resource: params.resource})
      }
    }

    fetchData();
  }, [params.resource, params.url]);

  return data;
}

// export function useFetch(url) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, [url]);

//   return data;
// }
