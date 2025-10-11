"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { title } from "@/components/primitives";
import { cn } from "@/utils/cn";

export interface HighlightedWord {
	word: string;
	color: "violet" | "blue" | "yellow" | "green" | "tan" | "cyan" | "pink" | "silver" | "foreground";
}

export const TextGenerateEffect = ({
	words,
	className,
	highlightedWords = [],
}: {
	words: string;
	className?: string;
	highlightedWords?: HighlightedWord[];
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
				duration: 1.2,
				delay: stagger(0.1),
			},
		);
	}, [animate]);

	const getWordClasses = (word: string) => {
		// Check if this word should be highlighted
		const highlightedWord = highlightedWords.find(hw => 
			hw.word.toLowerCase() === word.toLowerCase()
		);
		
		if (highlightedWord) {
			return cn(title({ color: highlightedWord.color }), "opacity-0");
		} else {
			return cn(title(), "opacity-0");
		}
	};

	const renderWords = () => {
		return (
			<motion.div 
				ref={scope} 
				className="w-full" 
				style={{ 
					wordSpacing: '0.1em',
					hyphens: 'auto',
					hyphenateLimitChars: '6 3 3',
					orphans: 2,
					widows: 2,
					lineHeight: '1.2'
				}}
			>
				{wordsArray.map((word, index) => {
					const uniqueKey = `${word}-${wordsArray.slice(0, index).join('-')}`;
					return (
						<motion.span key={uniqueKey} className={getWordClasses(word)}>
							{`${word} `}
							{index === 0 && <br />}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div 
					className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-wide"
					style={{
						wordBreak: 'keep-all',
						overflowWrap: 'break-word',
						hyphens: 'auto'
					}}
				>
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
