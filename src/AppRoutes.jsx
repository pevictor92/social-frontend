import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Feed from "./Pages/Feed/Feed";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Post from "./Pages/Post/Post";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/feed"
        element={<Feed />}
      />
      <Route
        path="/post"
        element={<Post />}
      />
    </Routes>
  );
}
