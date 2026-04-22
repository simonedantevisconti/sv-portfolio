import { useEffect, useState } from "react";

const TypedText = ({
  text,
  speed = 40,
  delay = 0,
  className = "",
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isDone && <span className="typing-cursor">|</span>}
    </span>
  );
};

export default TypedText;