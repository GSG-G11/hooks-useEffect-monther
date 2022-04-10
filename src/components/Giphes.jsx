import React from "react";
import { useEffect, useState } from "react";

function Giphes() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    changeInputValue('cat');

    return () => setInput('');
  }, []);

  const changeInputValue = (searchName) => {
    setInput(searchName);

    fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchName}&api_key=GB2TIpB11wLmKBbNbYZ5b6F9HMYXs38a`
      )
        .then((res) => res.json())
        .then((data) => setData(data.data));
  }

  return (
    <div>
      <input onChange={(e) => changeInputValue(e.target.value)} />
      {data.map(oneData => <img src={oneData.images.original.url}/>)}
    </div>
  );
}

export default Giphes;
