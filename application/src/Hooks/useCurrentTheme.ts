import { useState } from "react";
import { darkMode, lightMode } from "../util/constants";
import { ThemeType } from "../util/types";

export default function useCurrentTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(lightMode);
  const [isLightMode, setIsLightMode] = useState<boolean>(true);
  const changeTheme = () => {
    if (isLightMode) {
      setCurrentTheme(darkMode);
      setIsLightMode(false);
    } else {
      setCurrentTheme(lightMode);
      setIsLightMode(true);
    }
  };

  return { currentTheme, changeTheme };
}
