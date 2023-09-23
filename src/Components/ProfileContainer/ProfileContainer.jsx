import { useEffect, useState } from "react";
import "./profileContainer.scss";
import api from "../../Services/Api/Api";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileFeed from "../ProfileFeed/ProfileFeed";

export default function ProfileContainer() {
  const [userId] = useState(localStorage.getItem("SocialUserId"));
  const [userInformations, setUserInformations] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function getProfileInfo() {
      try {
        const profileInfo = await api.get(`users/${userId}`);
        const { data } = profileInfo;

        const userInfo = data.userInfo;
        setUserInformations(userInfo);

        const userPosts = data.userPosts;
        setUserPosts(userPosts);
      } catch (err) {
        alert("Error loading profile details.");
      }
    }
    getProfileInfo();
  }, [userId]);

  return (
    <main className="profile-container">
      <ProfileHeader
        username={userInformations.username}
        name={userInformations.name}
        description={userInformations.description}
        site={userInformations.site}
        avatar={userInformations.avatar}
      />
      <ProfileFeed userposts={userPosts} />
    </main>
  );
}
