import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function dataFetcher() {
    const url = "http://localhost:3000/signin"; // Replace with your API endpoint
    const data = {
      username: "yourUsername",
      pass: "yourPassword",
    };

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
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="name border-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Password">Password</label>
          <input
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
          Sign in
        </button>
      </div>
    </section>
  );
};

export default SignIn;
