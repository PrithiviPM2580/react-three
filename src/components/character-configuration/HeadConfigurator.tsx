import {
  SwatchesColors,
  useCharacterCustomization,
} from "../../context/CharacterCustomization";

const HeadConfigurator = () => {
  const {
    hairColor,
    setHairColor,
    eyeColor,
    setEyeColor,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor,
  } = useCharacterCustomization();

  return (
    <section className="head-color-card">
      <div className="head-color-header">
        <div>
          <p className="head-color-eyebrow">Head Style</p>
          <h3 className="head-color-title">Hair Color</h3>
        </div>
        <div
          className="head-color-preview"
          style={{ backgroundColor: hairColor }}
          aria-label={`Selected hair color ${hairColor}`}
        />
      </div>

      <p className="head-color-value">{hairColor}</p>

      <div className="head-color-swatches">
        {SwatchesColors.map((color) => {
          const isActive = color === hairColor;

          return (
            <button
              key={color}
              type="button"
              className={`head-swatch ${isActive ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setHairColor(color)}
              aria-label={`Set hair color to ${color}`}
              aria-pressed={isActive}
            />
          );
        })}
      </div>

      <label className="head-color-picker" htmlFor="hair-color-picker">
        <input
          id="hair-color-picker"
          type="color"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <span>Custom</span>
      </label>
    </section>
  );
};

export default HeadConfigurator;
