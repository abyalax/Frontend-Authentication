import React, { useState } from "react";
import { ThemeContext } from "../App";
import Authlayout from "../component/Layouts/AuthLayouts";
import FormRegister from "../component/Fragments/FormRegister";
import "../component/Elements/Toggle/theme.css";
import ToggleDarkMode from "../component/Elements/Toggle/Tema";

const RegisterPage = (props) => {
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
      <div className={`register-page ${theme}`}>
        {children}
        <div className="flex justify-center min-h-screen items-center">
          <Authlayout title="Register" type="register">
            <FormRegister />
          </Authlayout>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default RegisterPage;
