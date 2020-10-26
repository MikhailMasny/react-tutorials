import { useState, useEffect } from "react";
import axios from "axios";

export function useGetRequest(url) {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(url);
      setResponse(result.data);
    }
    fetchData();
  }, [url]);

  return {
    response,
  };
}
