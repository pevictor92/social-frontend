import "./feedContainer.scss";
import api from "../../Services/Api/Api";

import FeedCard from "../FeedCard/FeedCard";
import { useEffect, useState } from "react";

export default function FeedContainer() {
  const [allPosts, setAllPosts] = useState(null);
  const [postInteraction, setPostInteraction] = useState(false);
  function interaction() {
    setPostInteraction(!postInteraction);
  }

  useEffect(() => {
    async function getAllPosts() {
      try {
        const loadedPosts = await api.get("posts");
        const { data } = loadedPosts;
        setAllPosts(data.data.reverse());
      } catch (err) {
        alert("Unable to load posts");
      }
    }
    getAllPosts();
  }, [postInteraction]);
  return (
    <div className="feed-container">
      {allPosts === null ? (
        <h1 className="loading-message">Loading...</h1>
      ) : null}
      {allPosts &&
        allPosts.map((post) => (
          <FeedCard
            key={post._id}
            id={post._id}
            picture={post.picture}
            description={post.description}
            likes={post.likes}
            user={post.user}
            interaction={interaction}
          />
        ))}
    </div>
  );
}