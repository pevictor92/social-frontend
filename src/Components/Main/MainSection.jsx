export default function MainSection() {
  return (
    <main>
      <div className="form-login-register">
        <img alt="Logo" />
        <form>
          <div>
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
          </div>
          <button>Login</button>
        </form>
        <div>
          <p>
            Don&apos;t have an account?<a>Sign up</a>
          </p>
        </div>
      </div>
    </main>
  );
}
