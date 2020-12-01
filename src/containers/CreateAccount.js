import React from "react";
import CreateAccountForm from "./../components/CreateAccountForm";

function CreateAccount({ createAccount }) {
  return (
    <>
      <h1>Create Account</h1>
      <CreateAccountForm createAccount={createAccount} />
    </>
  );
}

export default CreateAccount;
