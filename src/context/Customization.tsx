import React, { createContext, useContext, useState } from "react";
type ChairColorOption = {
  color: string;
  name: string;
};

type CushionColorOption = {
  color: string;
  name: string;
};

export const chairColors: ChairColorOption[] = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];
export const cushionColors: CushionColorOption[] = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

type MaterialType = "leather" | "fabric";

type CustomizationContextType = {
  material: MaterialType;
  setMaterial: React.Dispatch<React.SetStateAction<MaterialType>>;
  legs: number;
  setLegs: React.Dispatch<React.SetStateAction<number>>;
  chairColor: ChairColorOption;
  setChairColor: React.Dispatch<React.SetStateAction<ChairColorOption>>;
  cushionColor: CushionColorOption;
  setCushionColor: React.Dispatch<React.SetStateAction<CushionColorOption>>;
};

const CustomizationContext = createContext<
  CustomizationContextType | undefined
>(undefined);

export const CustomizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [material, setMaterial] = useState<MaterialType>("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState<ChairColorOption>(
    chairColors[0],
  );
  const [cushionColor, setCushionColor] = useState<CushionColorOption>(
    cushionColors[0],
  );

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error(
      "useCustomization must be used within a CustomizationProvider",
    );
  }
  return context;
};
