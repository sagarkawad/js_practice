import { useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import DisplayBoard from "./pages/DisplayBoard/DisplayBoard";
import "./App.css";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-red-500">React App</h1>
      <SignIn />
      <DisplayBoard />
    </div>
  );
}

export default App;
