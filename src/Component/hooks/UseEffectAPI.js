import React, { useEffect, useState } from "react";

function UseEffectAPI() {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  //map
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("component did mount");
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("component did update");
  }, [content]);
  console.log(items)

  return (
    <>
      <button onClick={() => setContent("posts")}>Posts</button>
      <button onClick={() => setContent("users")}>users</button>
      <button onClick={() => setContent("comments")}>comments</button>
      <h1>{content}</h1>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <ul>
        { items && items.map((item)=>{
          return <li key={item.id}>{item.id}</li>
        })

        }
      </ul>
    </>
  );
}

export default UseEffectAPI;
