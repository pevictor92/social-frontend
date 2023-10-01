import { useState } from "react";
import api from "../../Services/Api/Api";
import UserInputDefault from "../UserInputDefault/UserInputDefault";
import { useNavigate } from "react-router-dom";
import "./registerMainSection.scss";

import login from "../../Utils/login";

export default function RegisterMainSection({ updateUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [site, setSite] = useState("");
  const [avatar, setAvatar] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function registrationHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("users", {
        username,
        password,
        name,
        description,
        site,
        avatar,
      });
      alert("User successfully registered!");

      login(response);

      const { data } = response;

      updateUserId(data.data._id);

      navigate("/feed");
    } catch (err) {
      alert("Register error, try again");
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="form-login-register">
        <img
          src="/hero-image.png"
          alt="Logo"
        />
        <form>
          {loading ? (
            <h1>Registering user...</h1>
          ) : (
            <>
              <h1>Sign up to see photos from other users</h1>
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
                <UserInputDefault
                  title="Name"
                  type="text"
                  state={name}
                  setState={(e) => setName(e.target.value)}
                />
                <UserInputDefault
                  title="Description"
                  type="text"
                  state={description}
                  setState={(e) => setDescription(e.target.value)}
                />
                <UserInputDefault
                  title="Website"
                  type="text"
                  state={site}
                  setState={(e) => setSite(e.target.value)}
                />
                <UserInputDefault
                  title="Avatar url"
                  type="text"
                  state={avatar}
                  setState={(e) => setAvatar(e.target.value)}
                />
              </fieldset>
              {avatar &&
                site &&
                description &&
                name &&
                password &&
                username && (
                  <button onClick={registrationHandler}>Submit</button>
                )}
            </>
          )}
        </form>
      </div>
    </main>
  );
}
