import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "text" | "drag">("default");
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  // Check for touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Add custom cursor class to body
    document.body.classList.add("custom-cursor");

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]");
      
      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor") as typeof cursorType;
        const text = cursorAttr.getAttribute("data-cursor-text") || "";
        setCursorType(type);
        setCursorText(text);
      } else if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setCursorType("hover");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleElementHover);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleElementHover);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [moveCursor, isTouchDevice]);

  const getCursorSize = () => {
    switch (cursorType) {
      case "hover":
        return 60;
      case "text":
        return 100;
      case "drag":
        return 80;
      default:
        return 16;
    }
  };

  const getCursorStyles = () => {
    const base = {
      width: getCursorSize(),
      height: getCursorSize(),
    };

    switch (cursorType) {
      case "hover":
        return {
          ...base,
          backgroundColor: "hsl(var(--primary) / 0.2)",
          border: "1px solid hsl(var(--primary) / 0.5)",
          mixBlendMode: "difference" as const,
        };
      case "text":
        return {
          ...base,
          backgroundColor: "hsl(var(--foreground))",
          mixBlendMode: "difference" as const,
        };
      case "drag":
        return {
          ...base,
          backgroundColor: "hsl(var(--primary) / 0.2)",
          border: "1px solid hsl(var(--primary))",
        };
      default:
        return {
          ...base,
          backgroundColor: "hsl(var(--primary))",
          mixBlendMode: "difference" as const,
        };
    }
  };

  // Hide on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          ...getCursorStyles(),
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: cursorType === "default" ? 1 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {cursorText && (
          <span className="text-meta text-primary-foreground whitespace-nowrap text-[10px] font-medium">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1 w-1 rounded-full bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && cursorType === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
