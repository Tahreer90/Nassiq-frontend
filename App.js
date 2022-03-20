import React, { useState } from "react";
import { LogBox } from "react-native";
// import { default as theme } from "./theme.json";
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Navigation } from "./components/navigation/Navigation";
import { ThemeContext } from "./components/navigation/theme-context";
import myTheme from "./theme.json";

export default () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
          <Navigation />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
