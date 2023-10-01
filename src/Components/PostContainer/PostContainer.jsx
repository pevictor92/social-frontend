import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./postContainer.scss";

import api from "../../Services/Api/Api";
import UserInputDefault from "../UserInputDefault/UserInputDefault";

export default function PostContainer() {
  const [user] = useState(localStorage.getItem("SocialUserId"));
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function postImage(e) {
    e.preventDefault();
    const data = {
      image,
      description,
    };
    try {
      await api.post("posts", data, {
        headers: {
          user,
        },
      });
      navigate("/feed");
    } catch (err) {
      alert("failed to post photo");
    }
  }

  return (
    <main className="post-container">
      {image ? (
        <img
          src={image}
          alt={description}
        />
      ) : (
        <img
          src="/default-image.png"
          alt="Insert photo"
        />
      )}
      <form>
        <h1>Post your photo</h1>
        <fieldset>
          <UserInputDefault
            title="Insert link of the photo"
            type="text"
            state={image}
            setState={(e) => setImage(e.target.value)}
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
