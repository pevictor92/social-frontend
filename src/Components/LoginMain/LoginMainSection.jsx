import { Link } from "react-router-dom";
import "./loginMainSection.scss";
import UserInputDefault from "../UserInputDefault/UserInputDefault";
import { useState } from "react";

export default function MainSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <div className="form-login-register">
        <img
          src="/hero-image.png"
          alt="Logo"
        />
        <form>
          <fieldset>
            <UserInputDefault
              title="User"
              type="text"
              state={username}
              setState={(e) => setUsername(e.target.value)}
            />
            <UserInputDefault
              title="Password"
              type="password"
              state={password}
              setState={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button>Login</button>
          <p>
            Don&apos;t have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
