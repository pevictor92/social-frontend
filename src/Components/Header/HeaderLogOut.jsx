import "./header.scss";

export default function HeaderLogOut() {
  return (
    <header>
      <nav className="nav-loggedout">
        <img
          src="/olive-logo.png"
          alt="Logo"
        />
      </nav>
    </header>
  );
}
