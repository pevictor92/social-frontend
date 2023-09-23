import LoginMainSection from "../../Components/LoginMain/LoginMainSection";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./login.scss";

export default function Login(updateUserId) {
  return (
    <>
      <Header />
      <LoginMainSection updateUserid={updateUserId}/>
      <Footer />
    </>
  );
}
