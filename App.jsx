import React, { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, AdminPortal } from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const handleSettingsClick = () => {
    AdminPortal.show();
  };

  if (!isAuthenticated) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user?.name}</h1>
      {user?.profilePicture && (
        <img src={user.profilePicture} alt="Profile" style={{ borderRadius: '50%' }} />
      )}
      <br />
      <button onClick={handleSettingsClick} style={{ marginTop: '20px' }}>
        Settings
      </button>
    </div>
  );
}

export default App;
