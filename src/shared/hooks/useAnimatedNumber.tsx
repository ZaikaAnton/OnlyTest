import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
export const useAnimatedNumber = (targetValue: number, duration = 0.5) => {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const animObj = useRef({ val: targetValue });

  useEffect(() => {
    if (animObj.current.val === targetValue) return;

    gsap.to(animObj.current, {
      val: targetValue,
      duration,
      ease: "power1.out",
      onUpdate: () => {
        setDisplayValue(Math.round(animObj.current.val));
      },
    });
  }, [targetValue, duration]);

  return displayValue;
};
