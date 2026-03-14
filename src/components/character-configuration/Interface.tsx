import { useCharacterAnimation } from "../../context/CharacterAnimation";
import {
  CameraModes,
  useCharacterCustomization,
} from "../../context/CharacterCustomization";
import HeadConfigurator from "./HeadConfigurator";
import TopConfigurator from "./TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();
  const { cameraMode, setCameraMode } = useCharacterCustomization();

  return (
    <>
      <div className="top-interface">
        {Object.values(CameraModes).map((mode) => (
          <button
            key={mode}
            onClick={() => setCameraMode(mode)}
            className={`${cameraMode === mode ? "active" : ""} camera-button`}
          >
            {mode}
          </button>
        ))}
      </div>
      <div className="head-interface">
        {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
        {cameraMode === CameraModes.TOP && <TopConfigurator />}
      </div>
      <div className="bottom-interface">
        {animations.map((animation, index) => (
          <button
            key={index}
            className={`${index === animationIndex ? "active" : ""} animation-button`}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </button>
        ))}
      </div>
    </>
  );
};

export default Interface;
