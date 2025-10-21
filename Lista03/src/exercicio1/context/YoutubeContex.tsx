import React, { createContext, ReactNode } from "react";
import { useYoutube } from "../hooks/useYoutube";

interface YoutubeContextProps {
  openYoutube: () => Promise<void>;
}

export const YoutubeContext = createContext<YoutubeContextProps>({
  openYoutube: async () => {},
});

export const YoutubeProvider = ({ children }: { children: ReactNode }) => {
  const { openYoutube } = useYoutube();

  return (
    <YoutubeContext.Provider value={{ openYoutube }}>
      {children}
    </YoutubeContext.Provider>
  );
};
