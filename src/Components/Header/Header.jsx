import { IoMdExit } from "react-icons/io";
import "./header.scss";

export default function Header({ cleanUserId }) {
  function logoutHandler() {
    cleanUserId();
    localStorage.clear();
  }

  return (
    <header>
      <nav>
        <img
          src="/oliver-icon.png"
          alt="icon"
        />
        <IoMdExit onClick={logoutHandler} />
      </nav>
    </header>
  );
}
