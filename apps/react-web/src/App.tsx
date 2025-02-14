import React from "react";
import { Outlet, Link } from "react-router";
import { ThemesProvider } from "@workspace/ui/components/customs/themes-provider";

const App = () => {
  return (
    <div>
      <ThemesProvider>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </ThemesProvider>
    </div>
  );
};

export default App;
