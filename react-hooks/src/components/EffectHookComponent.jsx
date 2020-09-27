import React, { useState, useEffect } from "react";
import { API_JSONPLACEHOLDER } from "../constants/url.constant";

function EffectHookComponent() {
  const [type, setType] = useState("users");
  const [data, setDate] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  function getData(type) {
    fetch(`${API_JSONPLACEHOLDER + type}`)
      .then((response) => response.json())
      .then((json) => setDate(json));
  }

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Rendering a component every time
  useEffect(() => {
    console.log(type);
    getData(type);
  }, [type]);

  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      console.log("Dispose");
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Posts</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default EffectHookComponent;
