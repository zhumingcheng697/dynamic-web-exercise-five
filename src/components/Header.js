import React from "react";

function Header({ loggedIn, logOut }) {
  return (
    <header className="Header">
      <nav>
        {!loggedIn ? (
          <>
            <a href="./login">Login</a>
            <a href="./create-account">Create Account</a>
          </>
        ) : (
          <>
            <a href="./">User Profile</a>
            <a onClick={logOut}>Logout</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
