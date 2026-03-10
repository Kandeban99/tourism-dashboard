import React from "react";

const UseRef1 = () => {
//   const [input, setInput] = React.useState("");

  const inputRef = React.useRef();

  console.log("rendered one time");

  function handleChange() {
    console.log("typing:", inputRef.current.value);
  }

  function submit() {
    // inputRef.current.value = input;
    console.log( inputRef.current.value);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange} 
       
      />

      <button onClick={submit}> submit</button>
    </div>
  );
};

export default UseRef1;
