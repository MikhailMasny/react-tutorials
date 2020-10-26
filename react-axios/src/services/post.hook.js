import { useState, useEffect } from "react";
import axios from "axios";

export function usePostRequest(url, data) {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  const [response, setResponse] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios.post(url, data, { headers });
      setResponse(result.data);
    }
    fetchData();
  }, [url, data]);

  return {
    response,
  };
}
