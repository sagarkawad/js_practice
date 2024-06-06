import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import DisplayBoard from "./pages/DisplayBoard/DisplayBoard";
import "./App.css";

function App() {
  const [signedInUser, setSignedInUser] = useState("");
  const [otherUsers, setOtherUsers] = useState({});

  useEffect(() => {
    setSignedInUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-red-500">React App</h1>
      <SignIn setSignedInUser={setSignedInUser} />
      <DisplayBoard signedInUser={signedInUser} />
    </div>
  );
}

export default App;
