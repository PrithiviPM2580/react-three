import React, { createContext, useState } from "react";

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
} as const;

type CameraMode = (typeof CameraModes)[keyof typeof CameraModes];

type CharacterCustomizationContextType = {
  cameraMode: CameraMode;
  setCameraMode: React.Dispatch<React.SetStateAction<CameraMode>>;
};

const CharacterCustomizationContext = createContext<
  CharacterCustomizationContextType | undefined
>(undefined);

export const CharacterCustomizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cameraMode, setCameraMode] = useState<CameraMode>(CameraModes.FREE);

  return (
    <CharacterCustomizationContext.Provider
      value={{ cameraMode, setCameraMode }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  const context = React.useContext(CharacterCustomizationContext);
  if (context === undefined) {
    throw new Error(
      "useCharacterCustomization must be used within a CharacterCustomizationProvider",
    );
  }
  return context;
};
