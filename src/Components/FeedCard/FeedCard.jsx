import "./feedCard.scss";
import api from "../../Services/Api/Api";
import { useState } from "react";

export default function FeedCard({
  image,
  description,
  likes,
  user,
  id,
  interaction,
}) {
  const [userId] = useState(localStorage.getItem("SocialUserId"));

  async function likeAPost() {
    try {
      await api.post(`posts/${id}/like`, null, {
        headers: {
          user_id: userId,
        },
      });
      interaction();
    } catch (err) {
      alert("Unable to like this photo");
    }
  }

  async function unlikeAPost() {
    try {
      await api.post(`posts/${id}/dislike`, null, {
        headers: {
          user_id: userId,
        },
      });
      interaction();
    } catch (err) {
      alert("Unable to dislike this photo");
    }
  }

  return (
    <div className="card-container">
      <div className="card-header">
        <img
          src={user.avatar}
          alt="profile"
        />
        <h2>{user.username}</h2>
      </div>
      <div className="card-photo">
        <img
          src={image}
          alt={description}
        />
      </div>
      <div className="card-footer">
        <div className="card-metadata">
          {likes.includes(userId) ? (
            <img
              src="/fill-heart.svg"
              alt="Likes"
              onClick={() => {
                unlikeAPost();
              }}
            />
          ) : (
            <img
              src="/outline-heart.svg"
              alt="Likes"
              onClick={() => {
                likeAPost();
              }}
            />
          )}
          {likes.length > 1 ? (
            <h3>{likes.length} users liked this photo</h3>
          ) : likes.length === 1 ? (
            <h3>1 user liked this photo</h3>
          ) : null}
        </div>
        <div className="card-info">
          <p>
            <a href="/feed">{user.username}</a> {description}
          </p>
        </div>
      </div>
    </div>
  );
}
