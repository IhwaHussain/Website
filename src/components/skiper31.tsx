import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import type { MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import Discord1 from "/src/assets/images/Discord1.svg";
import Figma1 from "/src/assets/images/figma1.svg";
import Framer1 from "/src/assets/images/Framer1.svg";
import Github1 from "/src/assets/images/Github1.svg";
import Monog1 from "/src/assets/images/Monog1.svg";
import Notion1 from "/src/assets/images/notion1.svg";
import Pieces1 from "/src/assets/images/Pieces1.svg";
import Postman1 from "/src/assets/images/Postman1.svg";
import VsCode1 from "/src/assets/images/vsCode1.svg";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};
const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(
    scrollYProgress,
    [0, 0.75],
    [0, distanceFromCenter * 60],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.75],
    [0, distanceFromCenter * 50],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.75],
    [0, Math.abs(distanceFromCenter) * 20],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.75]);
  return (
    <motion.img
      src={char}
      className={cn("inline-block", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};
const Skiper31 = () => {
  const targetRef3 = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["end center", "start end"],
  });

  const macIcon = [
    Discord1,
    Figma1,
    Framer1,
    Github1,
    Monog1,
    Notion1,
    Pieces1,
    Postman1,
    VsCode1,
  ];
  const iconCenterIndex = Math.floor(macIcon.length / 2);
  return (
    <ReactLenis root>
      <main className="w-full mt-10">
        <div
          ref={targetRef3}
          className="relative box-border flex items-center flex-wrap justify-center gap-[2vw] perspective-normal"
        >
          {macIcon.map((char, index) => (
            <CharacterV3
              key={index}
              char={char}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </main>
    </ReactLenis>
  );
};
export { CharacterV3, Skiper31 };