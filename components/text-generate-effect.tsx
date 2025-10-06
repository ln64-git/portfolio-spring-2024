"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { title } from "@/components/primitives";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");

	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.2),
			},
		);
	}, [animate]);

	const actionWordOneClasses = cn(title({ color: "violet" }), "opacity-0");
	const actionWordTwoClasses = cn(title({ color: "blue" }), "opacity-0 ");
	const actionWordThreeClasses = cn(title({ color: "yellow" }), "opacity-0 ");

	const wordClasses = (index: number) => {
		// Highlight "Full-stack" (index 0) with violet, "automation" (index 5) with blue, and "intelligent" (index 7) with green
		if (index === 0) {
			return actionWordOneClasses; // violet
		} else if (index === 5) {
			return actionWordTwoClasses; // blue
		} else if (index === 7) {
			return actionWordThreeClasses; // green
		} else {
			return cn(title(), "opacity-0");
		}
	};

	const renderWords = () => {
		return (
			<motion.div ref={scope} className="w-full">
				{wordsArray.map((word, index) => {
					if (index === 0 || index === 3 || index === 6) {
						return (
							<motion.span key={word} className={wordClasses(index)}>
								{`${word} `}
								<br />
							</motion.span>
						);
					} else {
						return (
							<motion.span key={word} className={wordClasses(index)}>
								{`${word} `}
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
				<div className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
