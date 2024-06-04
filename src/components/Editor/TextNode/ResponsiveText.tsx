import React, { useRef, useEffect, RefObject } from "react";
import "./ResponsiveText.css";

interface ResponsiveTextProps {
  containerRef: RefObject<HTMLDivElement>;
  fontSize: string;
  customClassName: string;
  text: string;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  containerRef,
  fontSize,
  text,
  customClassName,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const container = containerRef.current;
      const textElement = textRef.current;

      if (container && textElement) {
        let containerWidth = container.offsetWidth;
        let textWidth = textElement.offsetWidth;
        let newFontSize = parseInt(container.style.fontSize);

        // Reduce font size until text fits within the container
        while (textWidth > containerWidth) {
          newFontSize -= 1;
          container.style.fontSize = `${newFontSize}px`;
          textWidth = textElement.offsetWidth;
        }
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [text, fontSize]);

  return (
    <span className={customClassName} ref={textRef}>
      {text}
    </span>
  );
};

export default ResponsiveText;
