"use client";
import type React from "react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<div className="relative h-full">
			<div
				className={cn(
					"absolute flex justify-center top-0 left-0 w-full h-[400px] transition-bg",
					className,
				)}
				{...props}
			>
				<div className="absolute mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 mt-16 rounded-lg inset-0 overflow-hidden">
					<div
						className={cn(
							`
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--orange-500)_10%,var(--orange-300)_15%,var(--orange-300)_20%,var(--yellow-200)_25%,var(--amber-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none 
            absolute -inset-[10px] opacity-50 will-change-transform`,

							showRadialGradient &&
								`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
						)}
					></div>
				</div>
			</div>
			{children}
		</div>
	);
};
