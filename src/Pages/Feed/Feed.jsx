import FeedContainer from "../../Components/FeedContainer/FeedContainer";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function Feed({ cleanUserId }) {
  return (
    <>
      <Header cleanUserId={cleanUserId} />
      <FeedContainer />
      <Footer />
    </>
  );
}
