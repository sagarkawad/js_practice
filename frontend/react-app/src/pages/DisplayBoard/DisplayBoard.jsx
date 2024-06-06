import React from "react";
import { useState } from "react";

const DisplayBoard = ({ signedInUser, otherUsers, setOtherUsers }) => {
  function signedInUserDataFetcher() {
    const url = "http://localhost:3000/users"; // Replace with your API endpoint
    const token = localStorage.getItem("authToken");

    if (!token) {
      return;
    }

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${token}`, // Standard header for bearer tokens
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setOtherUsers(data[1]);
        console.log(otherUsers);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="mt-8">
      DisplayBoard
      <h2>You are signed in as: {signedInUser}</h2>
      <button
        className="border w-24 rounded bg-green-300 mt-2 h-8"
        onClick={signedInUserDataFetcher}
      >
        Get Users
      </button>
      <div>
        {otherUsers.map((el) => {
          return <p key={el.username}>{el.username}</p>;
        })}
      </div>
    </div>
  );
};

export default DisplayBoard;
