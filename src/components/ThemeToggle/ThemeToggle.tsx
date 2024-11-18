"use client";
import React from "react";
import { useTheme } from "~/app/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center">
      <Button onClick={toggleTheme}>
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </Button>
    </div>
  );
};
