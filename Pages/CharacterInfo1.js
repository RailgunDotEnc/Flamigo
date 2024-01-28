// CharacterContext.js
import React, { createContext, useState, useContext } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterInfo, setCharacterInfo] = useState({
    name: "Flamigo",
    lv: 1,
    health: 100,
    happiness: 100,
    exp: 0.3,
    progress: {
      "1/26/2024 Task": "Some task details here"
    }
  });

  return (
    <CharacterContext.Provider value={{ characterInfo, setCharacterInfo }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
};
