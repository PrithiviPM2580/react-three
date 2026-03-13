import React, { createContext, useContext, useState } from "react";

type MaterialType = "leather" | "fabric";

type CustomizationContextType = {
  material: MaterialType;
  setMaterial: React.Dispatch<React.SetStateAction<MaterialType>>;
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

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
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
