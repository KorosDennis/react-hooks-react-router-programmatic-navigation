import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn,onLogin }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/login", {
     method: "POST",
     headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(formData),
  })
  .then((r)=> r.json())
  .then((user)=>{
    onLogin(user);
    history.push("/home");
  });
}

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    history.push("/");
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
  }

export default Login;
