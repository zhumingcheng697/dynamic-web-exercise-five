import React from "react";
import LoginForm from "./../components/LoginForm";

function Login({ logIn }) {
  return (
    <>
      <h1>Log In</h1>
      <LoginForm logIn={logIn} />
    </>
  );
}

export default Login;
