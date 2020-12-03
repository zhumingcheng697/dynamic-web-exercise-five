import React from "react";

function UserProfileComponent({ userInfo }) {
  if (!userInfo) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>UID:</strong> {userInfo.uid}
      </p>
      <p>
        <strong>Email:</strong> {userInfo.email}
      </p>
    </div>
  );
}

export default UserProfileComponent;
