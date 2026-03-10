import React, { useEffect, useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({email:'@gmail.com',country:'srilanka',about:'i am programmer'});

  useEffect(() => {
    setInputs((pre) => {
      return { ...pre, mobile: "+94" };
    });
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    alert(
      `username is ${inputs.username}` +
        ` age is ${inputs.age}` +
        ` mobile is ${inputs.mobile}`+
        ` email is ${inputs.email}`+
        ` country is ${inputs.country}`+
        ` about is ${inputs.about}`
    );
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" onChange={handleChange} />
        <br />
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={handleChange}
          value={inputs.mobile}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
        <br />

        <label htmlFor="country">country</label>
        <select name="country" id="country" onChange={handleChange} value={inputs.country}>
          <option value="">select</option>
          <option value="srilanka">Sri Lanka</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>

        <textarea name="about" id="" value={inputs.about} onChange={handleChange}></textarea>

        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
