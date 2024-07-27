"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        type="button"
        size="icon"
        className="bg-transparent hover:bg-transparent"
      />
    );
  }

  return (
    <Button
      type="button"
      onClick={handleChangeTheme}
      size="icon"
      className="bg-transparent hover:bg-transparent"
    >
      <span className="material-symbols-outlined text-black dark:text-white">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </Button>
  );
};

export default ThemeSwitcher;
