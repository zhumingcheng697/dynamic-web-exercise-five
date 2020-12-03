import React from "react";

function LoginForm({ logIn }) {
  return (
    <div>
      <form className="LoginForm" onSubmit={logIn}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" autoComplete="email" />

        <label htmlFor="current-password">Password</label>
        <input
          type="password"
          name="current-password"
          autoComplete="current-password"
        />

        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default LoginForm;
