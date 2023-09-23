import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./postContainer.scss";

import api from "../../Services/Api/Api";
import UserInputDefault from "../UserInputDefault/UserInputDefault";

export default function PostContainer() {
  const [user] = useState(localStorage.getItem("SocialUserId"));
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function postImage(e) {
    e.preventDefault();
    const data = {
      picture,
      description,
    };
    try {
      await api.post("posts", data, {
        headers: {
          user,
        },
      });
      navigate.push("/feed");
    } catch (err) {
      alert("failed to post photo");
    }
  }

  return (
    <main className="post-container">
      {picture ? (
        <img
          src={picture}
          alt={description}
        />
      ) : (
        <img
          src="/default-image.png"
          alt="Insert an image"
        />
      )}
      <form>
        <h1>Post your photo</h1>
        <fieldset>
          <UserInputDefault
            title="Insert a link o the image"
            type="text"
            state={picture}
            setState={(e) => setPicture(e.target.value)}
          />
          <UserInputDefault
            title="Photo description"
            type="text"
            state={description}
            setState={(e) => setDescription(e.target.value)}
          />
        </fieldset>
        <button onClick={postImage}>Post photo</button>
      </form>
    </main>
  );
}
