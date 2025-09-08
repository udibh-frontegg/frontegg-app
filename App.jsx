import React, { useEffect } from "react";
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    // Only try to redirect once loading is complete
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  if (isLoading) {
    return <div>Loading...</div>; // prevents flashing or loops while SDK initializes
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={logout}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={loginWithRedirect}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
