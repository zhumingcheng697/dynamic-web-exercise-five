import React from "react";

function CreateAccountForm({ createAccount }) {
  return (
    <div>
      <form className="LoginForm" onSubmit={createAccount}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="new-password">Password</label>
        <input type="password" name="new-password" />

        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}

export default CreateAccountForm;
