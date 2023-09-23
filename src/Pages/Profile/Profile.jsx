import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainSection from "../../Components/LoginMain/LoginMainSection";

export default function Profile({ cleanUserId }) {
  return (
    <>
      <Header cleanUserId={cleanUserId} />
      <MainSection />
      <Footer />
    </>
  );
}
