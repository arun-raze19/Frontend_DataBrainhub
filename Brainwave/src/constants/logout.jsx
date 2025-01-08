import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice"; // Import the logout action

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout
  };

  return (
    <div>
      <h2>You are logged in</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
