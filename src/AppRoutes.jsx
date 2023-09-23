import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Feed from "./Pages/Feed/Feed";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Post from "./Pages/Post/Post";
import { useState } from "react";

export default function AppRoutes() {
  const [userId, setUserID] = useState(localStorage.getItem("SocialUserId"));

  function updateUserId(user) {
    setUserID(user);
  }

  function cleanUserId() {
    setUserID(null);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          userId ? (
            <Navigate to="/feed" />
          ) : (
            <Login updateUserId={updateUserId} />
          )
        }
      />
      <Route
        path="/register"
        element={
          userId ? (
            <Navigate to="/feed" />
          ) : (
            <Register updateUserId={updateUserId} />
          )
        }
      />
      <Route
        path="/feed"
        element={
          userId ? <Feed cleanUserId={cleanUserId} /> : <Navigate to="/" />
        }
      />
      <Route
        path="/post"
        element={
          userId ? <Post cleanUserId={cleanUserId} /> : <Navigate to="/" />
        }
      />
      <Route
        path="/profile"
        element={
          userId ? <Profile cleanUserId={cleanUserId} /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
}
