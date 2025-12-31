"use client";

import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="animation">
        <div className="circle"></div>
        <div className="circle delay"></div>
        <div className="circle delay2"></div>
      </div>

      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        Oops! The page you’re looking for doesn’t exist or was moved.
      </p>

      <button onClick={() => navigate("/")}>
        Go back home
      </button>
    </div>
  );
}
