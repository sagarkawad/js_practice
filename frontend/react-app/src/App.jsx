import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import DisplayBoard from "./pages/DisplayBoard/DisplayBoard";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [signedInUser, setSignedInUser] = useState("");
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    setSignedInUser(localStorage.getItem("user"));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <nav>
            <Link to="/" className="mr-8">
              Sign In
            </Link>
            <Link to="/users">Users</Link>
          </nav>
          <SignIn
            setSignedInUser={setSignedInUser}
            setOtherUsers={setOtherUsers}
          />
        </>
      ),
    },
    {
      path: "users",
      element: (
        <>
          <nav>
            <Link to="/" className="mr-8">
              Sign In
            </Link>
            <Link to="/users">Users</Link>
          </nav>
          <DisplayBoard
            signedInUser={signedInUser}
            otherUsers={otherUsers}
            setOtherUsers={setOtherUsers}
          />
        </>
      ),
    },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-red-500">React App</h1>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
