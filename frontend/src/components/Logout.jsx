import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all local storage/session storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to home page
    navigate("/", { replace: true });
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;
