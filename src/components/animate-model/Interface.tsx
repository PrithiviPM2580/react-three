import { useCharacterAnimation } from "../../context/CharacterAnimation";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();

  return (
    <div className="interface">
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
  );
};

export default Interface;
