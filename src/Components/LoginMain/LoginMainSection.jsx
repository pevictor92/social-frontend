import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginMainSection.scss";

import login from "../../Utils/login";
import UserInputDefault from "../../Components/UserInputDefault/UserInputDefault";
import api from "../../Services/Api/Api";

export default function LoginMainSection({ updateUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("login", {
        username,
        password,
      });

      login(response);

      const { data } = response;

      updateUserId(data.data._id);

      navigate("/feed");
    } catch (err) {
      alert("Login failed, try again");
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="form-login-register">
        <img
          src="/hero-image.png"
          alt="Image"
        />
        <form>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h1>Enter</h1>
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
              <button onClick={loginHandler}>Sign in</button>
              <p>
                Don&apos;t have an account? <Link to="/register">Sign up</Link>
              </p>
            </>
          )}
        </form>
      </div>
    </main>
  );
}
