export type ThemeState = {
    theme: "light" | "dark";
    toggleTheme: () => void;
  };
  
  export type ThemeColors = {
    light: {
      primary: string;
      secondary: string;
      text: string;
    };
    dark: {
      primary: string;
      secondary: string;
      text: string;
    };
  };