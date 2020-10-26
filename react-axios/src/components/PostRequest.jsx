import { useState } from "react";
import * as constant from "../constants/common";
import { usePostRequest } from "../services/post.hook";

export default function PostRequest() {
  const [data, setData] = useState({ title: "foo", body: "bar", userId: 1 });
  const result = usePostRequest(constant.POST_JSON_POST, data);

  function random() {
    setData({
      title: Math.random().toString(36).substring(7),
      body: Math.random().toString(36).substring(7),
      userId: Math.floor(Math.random() * 10) + 1,
    });
  }

  return (
    <div className="yellow">
      <button onClick={random}>Random</button>
      <p>
        {result.response.title} {result.response.body} {result.response.userId}{" "}
        {result.response.id}
      </p>
    </div>
  );
}
