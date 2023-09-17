import "./mainSection.scss";

export default function MainSection() {
  return (
    <main>
      <div className="form-login-register">
        <img
          src="/hero-image.jpg"
          alt="Logo"
        />
        <form>
          <fieldset>
            <div className="input-field">
              <label htmlFor="user">User</label>
              <input
                id="user"
                type="text"
                placeholder="User"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </fieldset>
          <button>Login</button>
        </form>
      </div>
    </main>
  );
}
