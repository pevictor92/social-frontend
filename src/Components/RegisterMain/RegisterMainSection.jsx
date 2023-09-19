import { useState } from "react";
import UserInputDefault from "../UserInputDefault/UserInputDefault";
import api from "../../Services/Api/Api";

export default function RegisterMainSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [site, setSite] = useState("");
  const [avatar, setAvatar] = useState("");

  async function registrationHandler(e) {
    e.preventDefault();
    try {
      await api.post("users", {
        username,
        password,
        name,
        description,
        site,
        avatar,
      });
      alert("Usuário cadastro com sucesso!");
      setUsername("");
      setPassword("");
      setName("");
      setDescription("");
      setSite("");
      setAvatar("");
    } catch (err) {
      alert("Erro ao cadastrar usuário, tente novamente");
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
          <h1>Sign up to see photos from your friends.</h1>
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
              title="Avatar"
              type="text"
              state={avatar}
              setState={(e) => setAvatar(e.target.value)}
            />
          </fieldset>
          {avatar && site && description && name && password && username && (
            <button onClick={registrationHandler}>Submit</button>
          )}
        </form>
      </div>
    </main>
  );
}
