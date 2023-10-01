import HeaderLogout from "../../Components/HeaderLogout/HeaderLogout";
import LoginMainSection from "../../Components/LoginMain/LoginMainSection";
import FooterLogout from "../../Components/FooterLogout/FooterLogout";

export default function Login({ updateUserId }) {
  return (
    <>
      <HeaderLogout />
      <LoginMainSection updateUserId={updateUserId} />
      <FooterLogout />
    </>
  );
}
