import React, { useState } from "react";
import { useAuth, useAuthActions } from "@frontegg/react";

function App() {
  const { user } = useAuth();
  const { switchTenant } = useAuthActions();
  const [selectedTenant, setSelectedTenant] = useState(user?.tenantId || "");

  const handleSwitchTenant = (tenantId) => {
    setSelectedTenant(tenantId);
    switchTenant({ tenantId }); // you can also use silentReload: true if needed
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <label htmlFor="tenant-select">Select Active Tenant:</label>
      <select
        id="tenant-select"
        value={selectedTenant}
        onChange={(e) => handleSwitchTenant(e.target.value)}
      >
        {user.tenantIds?.map((tenant) => (
          <option key={tenant} value={tenant}>
            {tenant}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
