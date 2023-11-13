import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(function() {

    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);

  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="w-screen h-screen flex items-center justify-center bg-slate-300 text-black dark:bg-slate-900 dark:text-white">
        <div className="border-2 border-black p-4 rounded dark:border-white">
          <h1 className="text-xl">React Project | useContext</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, vero. Incidunt porro molestias asperiores!</p>
        </div>

        <ThemeBtn />
      </div>
    </ThemeProvider>
  )
}

export default App
