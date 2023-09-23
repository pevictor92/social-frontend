import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainSection from "../../Components/LoginMain/LoginMainSection";

export default function Post({cleanUserId}) {
  return (
    <>
      <Header />
      <MainSection cleanUserId={cleanUserId}/>
      <Footer />
    </>
  );
}
