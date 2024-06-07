import React, { useState } from "react";
import { ThemeContext } from "../App";
import Authlayout from "../component/Layouts/AuthLayouts";
import FormLogin from "../component/Fragments/FormLogin";
import "../component/Elements/Toggle/theme.css";
import ToggleDarkMode from "../component/Elements/Toggle/Tema";
const LoginPage = (props) => {
  const [theme, setTheme] = useState("dark");
  const { children } = props;
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="absolute top-5 right-5">
      <ToggleDarkMode size={50}/>
      </div>
      <div className={`login-page ${theme}`}>
        <div className="flex justify-center min-h-screen items-center">
          <Authlayout title="Login" type="login">
            <FormLogin />
            {children}
          </Authlayout>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default LoginPage;
