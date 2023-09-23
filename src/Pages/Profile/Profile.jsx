import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProfileContainer from "../../Components/ProfileContainer/ProfileContainer";

export default function Profile({ cleanUserId }) {
  return (
    <>
      <Header cleanUserId={cleanUserId} />
      <ProfileContainer />
      <Footer />
    </>
  );
}
