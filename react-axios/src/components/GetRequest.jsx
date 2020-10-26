import { useState } from "react";
import * as constant from "../constants/common";
import { useGetRequest } from "../services/get.hook";

export default function GetRequest() {
  const [value, setValue] = useState(1);
  const result = useGetRequest(constant.GET_JSON_TODO + value);

  function random() {
    setValue(Math.floor(Math.random() * 10) + 1);
  }

  return (
    <div className="green">
      <button onClick={random}>Random</button>
      <p className="white">
        {result.response.userId} {result.response.id} {result.response.title}{" "}
        {result.response.completed}
      </p>
    </div>
  );
}
