import React, { createContext, useState } from "react";
import "./component/Elements/Toggle/theme.css"
import Welcome from "./pages/Welcome";
import ToggleDarkMode from "./component/Elements/Toggle/Tema"

export const ThemeContext = createContext("dark");

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Welcome>
          <ToggleDarkMode size={60}/>
        </Welcome>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
