import FeedContainer from "../../Components/FeedContainer/FeedContainer";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./feed.scss";

export default function Feed(CleanUserId) {
  return (
    <>
      <Header CleanUserId={CleanUserId} />
      <FeedContainer />
      <Footer />
    </>
  );
}
