import {
  SwatchesColors,
  useCharacterCustomization,
} from "../../context/CharacterCustomization";
import { useState } from "react";

const BottomConfigurator = () => {
  const {
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    soleColor,
    setSoleColor,
    lacesColor,
    setLacesColor,
  } = useCharacterCustomization();

  const colorControls = [
    {
      key: "pants",
      label: "Pants",
      value: pantsColor,
      setValue: setPantsColor,
    },
    {
      key: "shoes",
      label: "Shoes",
      value: shoesColor,
      setValue: setShoesColor,
    },
    {
      key: "sole",
      label: "Sole",
      value: soleColor,
      setValue: setSoleColor,
    },
    {
      key: "laces",
      label: "Laces",
      value: lacesColor,
      setValue: setLacesColor,
    },
  ] as const;

  const [activeControlKey, setActiveControlKey] =
    useState<(typeof colorControls)[number]["key"]>("pants");

  const activeControl =
    colorControls.find((control) => control.key === activeControlKey) ??
    colorControls[0];

  return (
    <section className="head-color-card">
      <div className="head-color-header">
        <div>
          <p className="head-color-eyebrow">Bottom Style</p>
          <h3 className="head-color-title">{activeControl.label} Color</h3>
        </div>
        <div
          className="head-color-preview"
          style={{ backgroundColor: activeControl.value }}
          aria-label={`Selected ${activeControl.label.toLowerCase()} color ${activeControl.value}`}
        />
      </div>

      <div className="head-feature-tabs">
        {colorControls.map((control) => {
          const isActive = control.key === activeControl.key;

          return (
            <button
              key={control.key}
              type="button"
              className={`head-feature-button ${isActive ? "active" : ""}`}
              onClick={() => setActiveControlKey(control.key)}
            >
              {control.label}
            </button>
          );
        })}
      </div>

      <p className="head-color-value">{activeControl.value}</p>

      <div className="head-color-swatches">
        {SwatchesColors.map((color) => {
          const isActive = color === activeControl.value;

          return (
            <button
              key={color}
              type="button"
              className={`head-swatch ${isActive ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => activeControl.setValue(color)}
              aria-label={`Set ${activeControl.label.toLowerCase()} color to ${color}`}
              aria-pressed={isActive}
            />
          );
        })}
      </div>

      <label className="head-color-picker" htmlFor="head-color-picker">
        <input
          id="head-color-picker"
          type="color"
          value={activeControl.value}
          onChange={(e) => activeControl.setValue(e.target.value)}
        />
        <span>Custom {activeControl.label}</span>
      </label>
    </section>
  );
};

export default BottomConfigurator;
