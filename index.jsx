import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FronteggProvider } from "@frontegg/react";
import { app } from "@frontegg/js"; // 👈 import the Frontegg app instance

const contextOptions = {
  baseUrl: "https://app-grkb95gt40d2.frontegg.com",
  clientId: "8a6a896a-f550-4853-97a2-5d79969cd9d3",
  appId: "d52557bd-5aa0-4adb-a090-4afd4c9284f4"
};

const authOptions = {
  keepSessionAlive: true
};

// Example helper function to switch tenants
export function handleSwitchTenant(tenantId) {
  app.switchTenant({
    tenantId,
    silentReload: true,
    callback: (isSuccess) => {
      console.log("Tenant switch success:", isSuccess);
    }
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App handleSwitchTenant={handleSwitchTenant} />
    </FronteggProvider>
  </React.StrictMode>
);
