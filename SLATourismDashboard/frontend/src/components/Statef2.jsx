import React, { useState } from "react";

function Statef2() {
  const [list, setList] = useState([]);

  const [count,setCount]=useState(1);

  function addItem() {
    setList((prev) => {
      return [...prev, "item " + count];
    });
    setCount(count + 1);
  }

  return (
    <>
      <h1>list</h1>
      <button onClick={addItem}>add item</button>
      <ul>
        {list.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default Statef2;
