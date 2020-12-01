import React from "react";
import UserProfileComponent from "../components/UserProfileComponent";

function UserProfile({ userInfo }) {
  return (
    <>
      <h1>User Profile</h1>
      <UserProfileComponent userInfo={userInfo} />
    </>
  );
}

export default UserProfile;
