"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "~/app/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Устанавливаем состояние, когда компонент загружается на клиенте
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null; // Можно вернуть любой другой заглушку, если нужно
  }
  return (
    <div className="flex items-center">
      <Button onClick={toggleTheme}>
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </Button>
    </div>
  );
};
