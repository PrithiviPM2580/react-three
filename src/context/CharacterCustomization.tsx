import React, { createContext, useState } from "react";

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
} as const;

export const SwatchesColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#F7B801",
  "#9B5DE5",
  "#00BBF9",
  "#00F5D4",
  "#F15BB5",
  "#F9844A",
  "#90BE6D",
  "#577590",
  "#FF9F1C",
  "#2EC4B6",
  "#E71D36",
  "#6A4C93",
];

type CameraMode = (typeof CameraModes)[keyof typeof CameraModes];

type CharacterCustomizationContextType = {
  cameraMode: CameraMode;
  setCameraMode: React.Dispatch<React.SetStateAction<CameraMode>>;
  hairColor: string;
  setHairColor: React.Dispatch<React.SetStateAction<string>>;
  eyeColor: string;
  setEyeColor: React.Dispatch<React.SetStateAction<string>>;
  glassesColor: string;
  setGlassesColor: React.Dispatch<React.SetStateAction<string>>;
  skinColor: string;
  setSkinColor: React.Dispatch<React.SetStateAction<string>>;
  shirtColor: string;
  setShirtColor: React.Dispatch<React.SetStateAction<string>>;
  pantsColor: string;
  setPantsColor: React.Dispatch<React.SetStateAction<string>>;
  shoesColor: string;
  setShoesColor: React.Dispatch<React.SetStateAction<string>>;
  soleColor: string;
  setSoleColor: React.Dispatch<React.SetStateAction<string>>;
  lacesColor: string;
  setLacesColor: React.Dispatch<React.SetStateAction<string>>;
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
  const [hairColor, setHairColor] = useState<string>(SwatchesColors[0]);
  const [eyeColor, setEyeColor] = useState<string>(SwatchesColors[1]);
  const [glassesColor, setGlassesColor] = useState<string>(SwatchesColors[2]);
  const [skinColor, setSkinColor] = useState<string>(SwatchesColors[3]);
  const [shirtColor, setShirtColor] = useState<string>(SwatchesColors[4]);
  const [pantsColor, setPantsColor] = useState<string>(SwatchesColors[5]);
  const [shoesColor, setShoesColor] = useState<string>(SwatchesColors[6]);
  const [soleColor, setSoleColor] = useState<string>(SwatchesColors[7]);
  const [lacesColor, setLacesColor] = useState<string>(SwatchesColors[8]);

  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,
        hairColor,
        setHairColor,
        eyeColor,
        setEyeColor,
        glassesColor,
        setGlassesColor,
        skinColor,
        setSkinColor,
        shirtColor,
        setShirtColor,
        pantsColor,
        setPantsColor,
        shoesColor,
        setShoesColor,
        soleColor,
        setSoleColor,
        lacesColor,
        setLacesColor,
      }}
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
