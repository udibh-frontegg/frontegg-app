import React, { useState, useEffect } from "react";
import { useAuth, useAuthActions } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();
  const [selectedTenant, setSelectedTenant] = useState("");

  useEffect(() => {
    if (isAuthenticated && user?.tenantId) {
      setSelectedTenant(user.tenantId);
    }
  }, [isAuthenticated, user]);

  const handleSwitchTenant = (tenantId) => {
    setSelectedTenant(tenantId);
    switchTenant({ tenantId, silentReload: true });
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Welcome, {user?.name || "User"}</h2>

      <div style={{ marginTop: "10px" }}>
        <label htmlFor="tenant-select" style={{ marginRight: "10px" }}>
          Select Active Tenant:
        </label>
        <select
          id="tenant-select"
          value={selectedTenant}
          onChange={(e) => handleSwitchTenant(e.target.value)}
        >
          {user?.tenantIds?.map((tenantId) => (
            <option key={tenantId} value={tenantId}>
              {tenantId}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
