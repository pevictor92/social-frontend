import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <img
          src="/olive-logo.png"
          alt="Logo"
        />
        <Link to="/">
          <IoMdExit />
        </Link>
      </nav>
    </header>
  );
}
