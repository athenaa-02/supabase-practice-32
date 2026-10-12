import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function PrecticeContext() {
  const { theme, handleModeChange } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <button onClick={handleModeChange}>mode is {theme} </button>
      <div className="h-20 dark:bg-[red]"></div>
      <div
        className=""
        style={{
          height: "100px",
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
        }}
      ></div>
    </>
  );
}

export default PrecticeContext;
