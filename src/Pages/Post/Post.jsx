import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostContainer from "../../Components/PostContainer/PostContainer";

export default function Post({ cleanUserId }) {
  return (
    <>
      <Header cleanUserId={cleanUserId} />
      <PostContainer />
      <Footer />
    </>
  );
}
