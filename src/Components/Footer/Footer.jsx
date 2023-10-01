import { Link } from "react-router-dom";
import { MdHomeFilled, MdPhotoCamera, MdPerson } from "react-icons/md";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <nav>
        <Link to="/feed">
          <MdHomeFilled />
        </Link>
        <Link to="/post">
          <MdPhotoCamera />
        </Link>
        <Link to="/profile">
          <MdPerson />
        </Link>
      </nav>
    </footer>
  );
}
