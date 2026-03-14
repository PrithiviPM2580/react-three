import React, { createContext, useState } from "react";

type CharacterAnimationContextType = {
  animationIndex: number;
  setAnimationIndex: React.Dispatch<React.SetStateAction<number>>;
  animations: string[];
  setAnimations: React.Dispatch<React.SetStateAction<string[]>>;
};

const CharacterAnimationContext = createContext<
  CharacterAnimationContextType | undefined
>(undefined);

export const CharacterAnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState<string[]>([]);

  return (
    <CharacterAnimationContext.Provider
      value={{ animationIndex, setAnimationIndex, animations, setAnimations }}
    >
      {children}
    </CharacterAnimationContext.Provider>
  );
};

export const useCharacterAnimation = () => {
  const context = React.useContext(CharacterAnimationContext);
  if (context === undefined) {
    throw new Error(
      "useCharacterAnimation must be used within a CharacterAnimationProvider",
    );
  }
  return context;
};
