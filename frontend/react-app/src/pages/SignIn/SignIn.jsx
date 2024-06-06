import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function dataFetcher() {
    const url = "http://localhost:3000/signin"; // Replace with your API endpoint
    const data = {
      username: name,
      pass: pass,
    };
    let token;

    fetch(url, {
      method: "POST",
      // HTTP method
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        console.log("Success:", data);
        if (!data.token) {
          return;
        }
        token = data.token;
        localStorage.setItem("authToken", token);
        console.log(token);
        setName("");
        setPass("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <section>
      <h1>Sign In</h1>
      <div>
        <div className="flex flex-col">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="name border-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Password">Password</label>
          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            className="name border-2 rounded"
          />
        </div>
        <button
          onClick={dataFetcher}
          className="border w-24 rounded bg-green-300 mt-4"
        >
          Sign In
        </button>
        <button className="border w-24 rounded bg-green-300 mt-4 ml-4">
          Log Out
        </button>
      </div>
    </section>
  );
};

export default SignIn;
