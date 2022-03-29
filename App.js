import { useState } from "react";
import { LogBox } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Navigation } from "./components/navigation/Navigation";
import { ThemeContext } from "./components/navigation/theme-context";
import myTheme from "./theme.json";
import { SSRProvider } from "@react-aria/ssr";
import Toast from "react-native-toast-message";
import { Provider as PaperProvider } from "react-native-paper";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <PaperProvider>
      <SSRProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
            <Navigation />
            <Toast />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </SSRProvider>
    </PaperProvider>
  );
};
