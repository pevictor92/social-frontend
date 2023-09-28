import Header from "../../Components/Header/Header";
import LoginMainSection from "../../Components/LoginMain/LoginMainSection";
import Footer from "../../Components/Footer/Footer";

export default function Login({ updateUserId }) {
  return (
    <>
      <Header />
      <LoginMainSection updateUserId={updateUserId} />
      <Footer />
    </>
  );
}
