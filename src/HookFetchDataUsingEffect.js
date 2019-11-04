import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetchingUsingEffect() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [onBtnClkId, setBtnClkId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${onBtnClkId}`)
      .then(res => setPost(res.data))
      .catch(error => console.log(error));
  }, [onBtnClkId]);

  const setIdOnBtnClick = () => {
    setBtnClkId(id);
  };

  return (
    <>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={setIdOnBtnClick}>Get Post</button>
      <ul>
        <li>{post.title}</li>
      </ul>

      {/* <ul>
        {post.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
}
