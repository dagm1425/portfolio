import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ModalTyping } from "../typings";

interface CustomCursorProps {
  isLinkActive: boolean;
  modal: ModalTyping;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isLinkActive, modal }) => {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.4,
      ease: "power1.easeOut",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.4,
      ease: "power1.easeOut",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      moveCursorX(clientX);
      moveCursorY(clientY);
    });
  }, []);

  return (
    <div
      ref={cursor}
      className={`
        hidden xl:block fixed w-5 h-5 -ml-2 -mt-2 rounded-[50%] transition
        ease-in origin-center z-40 pointer-events-none 
        ${
          isLinkActive
            ? "scale-[4.1] bg-white border-0 mix-blend-difference"
            : "scale-100 bg-transparent border border-solid border-white mix-blend-normal"
        }
        ${modal.isActive ? "!hidden" : "block"}
        `}
    />
  );
};

export default CustomCursor;
