import FooterLogout from "../../Components/FooterLogout/FooterLogout";
import HeaderLogout from "../../Components/HeaderLogout/HeaderLogout";
import RegisterMainSection from "../../Components/RegisterMain/RegisterMainSection";

export default function Register({ updateUserId }) {
  return (
    <>
      <HeaderLogout />
      <RegisterMainSection updateUserId={updateUserId} />
      <FooterLogout />
    </>
  );
}
