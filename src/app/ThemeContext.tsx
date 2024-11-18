"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Определяем типы для контекста
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Создаем контекст с начальным значением
const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // Значение по умолчанию
  toggleTheme: () => {
    console.log("toggle theme");
  }, // Заглушка для функции
});

// Провайдер контекста
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Инициализация темы из localStorage или установка по умолчанию
    const savedTheme =
      typeof window !== "undefined" &&
      (localStorage.getItem("theme") as "light" | "dark");
    return savedTheme || "light";
  });

  useEffect(() => {
    // Добавляем/удаляем класс "dark" из <html> при изменении темы
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Функция переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования контекста
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
