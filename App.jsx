import React from "react";
import { useAuth, useLoginWithRedirect, useLogout } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const logout = useLogout();

  if (!isAuthenticated) {
    return (
      <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <h1>Welcome to Frontegg App</h1>
        <p>You are not logged in.</p>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "none",
            background: "#4f46e5",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Welcome {user?.name || user?.email} 🎉</h1>
      <p>You are logged in!</p>

      <div style={{ marginTop: "1rem" }}>
        <h3>User Info</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>

      <button
        onClick={() => logout()}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "none",
          background: "#ef4444",
          color: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
