export default function saveUserInfoOnLocalStorage(res) {
  const { data } = res;

  const userId = data.data._id;
  const userName = data.data.username;

  localStorage.setItem("SocialUserId", userId);
  localStorage.setItem("SocialUserName", userName);
}
