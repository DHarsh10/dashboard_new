import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import Topbar from "./scenes/Topbar";
import SideBar from "./scenes/SideBar";
import SideBarStatus from "./utils/contexts/sideBarStatus";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <SideBarStatus.Provider value={{ isCollapsed, setIsCollapsed }}>
            <main className="content flex">
              <div className="flex h-full">
                <SideBar />
              </div>
              <div
                className={`${
                  isCollapsed ? "rightContainerFS" : "rightContainer"
                }`}
              >
                <Topbar />
                <div className="p-4">
                  <Outlet />
                </div>
              </div>
            </main>
          </SideBarStatus.Provider>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
