"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { title } from "@/components/primitives";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const actionWordOneClasses = cn(title({ color: "violet" }), "opacity-0");
  const actionWordTwoClasses = cn(title({ color: "blue" }), "opacity-0 ");
  const actionWordThreeClasses = cn(title({ color: "yellow" }), "opacity-0 ");

  const wordClasses = (index: number) => {
    if (index === 0) {
      return actionWordOneClasses;
    } else if (index === 7) {
      return actionWordTwoClasses;
    } else if (index === 9 || index === 10) {
      return actionWordThreeClasses;
    } else {
      return cn(title(), "opacity-0");
    }
  };

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          if (index == 0 || index == 3 || index == 6) {
            return (
              <motion.span key={word + index} className={wordClasses(index)}>
                {word + " "}
                <br />
              </motion.span>
            );
          } else {
            return (
              <motion.span key={word + index} className={wordClasses(index)}>
                {word + " "}
              </motion.span>
            );
          }
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 ">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
