"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import aboutData from "@/content/about-data";

export default function AboutPage() {
	const { name, skills1, skills2, skills3, summary } = aboutData;

	const skillSets = [
		{
			name: "AI & Machine Learning",
			skills: skills1,
			description:
				"In AI, the edge is with data you control, not the model. RAG pipelines pull precise, encrypted context—offline when needed—while LangChain drives agentic workflows with clean, autonomous action. Embeddings reveal key connections. My projects—local notes, offline voices, decentralized archives—prove AI thrives on secure data. I prioritize control, then scale.",
			color: "from-blue-500 to-purple-600",
		},
		{
			name: "Automation Engineering",
			skills: skills2,
			description:
				"In automation, the goal is simple: eliminate waste. Five years on Linux has shown me every system fights friction, scripts fix this. Puppeteer does the web the same way: no clicks, no repeats. TypeScript keeps code tight, Don't Repeat Yourself isn't optional, it's structural. Efficiency isn't flashy; it's the quiet habit of removing what doesn't move. That's all.",
			color: "from-green-500 to-teal-600",
		},
		{
			name: "Technical Infrastructure",
			skills: skills3,
			description:
				"Through Technical Infrastructure and systems engineering, I prototype fast with Rust, Bun, or Node, then reinforce with secure databases-local by default, cloud only for speed. Logic balances low-level efficiency with high-level clarity, optimizing workload between user and server. Five years taught me: build quick, prove it, distribute smart, and lock it down.",
			color: "from-orange-500 to-red-600",
		},
	];

	return (
		<div className="relative mx-auto max-w-6xl font-montserrat py-12 px-6 md:px-8">
			{/* Hero Section */}
			<section className="mb-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
					className="max-w-4xl mx-auto"
				>
					<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
						{/* Photo Section */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="flex-shrink-0"
						>
							<div className="w-56 h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
					<Image
									width={256}
									height={320}
									alt="Luke Anthony - AI & Automation Specialist"
						src="https://i.imgur.com/PbMQHyX.jpeg"
									className="w-full h-full object-cover"
					/>
				</div>
						</motion.div>

						{/* Content Section */}
						<div className="flex-1 text-center lg:text-left">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.8 }}
								className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight"
							>
							{name}
							</motion.h1>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.7, duration: 0.8 }}
								className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-normal max-w-xl mx-auto lg:mx-0"
							>
								{summary}
							</motion.p>
						</div>
					</div>
				</motion.div>
			</section>

			{/* Skills Sections */}
			{skillSets.map((skillSet) => (
				<section key={skillSet.name} className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-center mb-2"
					>
						<h2 className="text-[1.75rem] font-medium text-foreground mb-2 tracking-tight">
							{skillSet.name}
						</h2>
						<div className="w-12 h-px bg-gradient-to-r from-transparent via-default-600 to-transparent mx-auto mb-2"></div>
					</motion.div>

					<div className="max-w-5xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="mb-20 "
						>
							<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-normal text-center max-w-4xl mx-auto">
								{skillSet.description}
							</p>
						</motion.div>

						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{skillSet.skills.map(([skillName, years], index) => (
								<motion.div
									key={skillName}
									whileHover={{ scale: 1.05, y: -2 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ 
										delay: 0.3 + (index * 0.05), 
										duration: 0.8,
										ease: [0.25, 0.1, 0.25, 1]
									}}
									className="bg-content1/60 backdrop-blur-lg rounded-xl p-6 transition-all duration-500 shadow-lg hover:shadow-xl hover:bg-content1/80 group"
								>
									<div className="text-center">
										<div className="text-[1.1rem] font-semibold text-foreground mb-2 group-hover:text-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600">
											{skillName}
				</div>
										<div className="flex items-center justify-center gap-2">
											<div className="flex gap-1">
												{Array.from({ length: 5 }, (_, i) => (
													<div
														key={`${skillName}-experience-dot-${i + 1}`}
														className={`w-2 h-2 rounded-full ${
															i < (years as number)
																? `bg-gradient-to-r ${skillSet.color}`
																: "bg-gray-300 dark:bg-gray-600"
														}`}
													/>
												))}
											</div>
											<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
												{years}y
											</span>
				</div>
			</div>
								</motion.div>
							))}
				</div>
			</div>
				</section>
			))}


		</div>
	);
}
