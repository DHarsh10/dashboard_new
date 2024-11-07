import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import Topbar from "./scenes/Topbar";
import SideBar from "./scenes/SideBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content flex">
            <div className="flex h-full">
              <SideBar />
            </div>
            <div className="w-full">
              <Topbar />
              <div className="p-4">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
