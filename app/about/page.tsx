"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import aboutData from "@/content/about-data";

export default function AboutPage() {
	const { name, info, skills1, skills2, skills3, summary } = aboutData;

	const skillSets = [
		{
			name: "AI & Machine Learning",
			skills: skills1,
			description:
				"I have built multiple AI-driven applications using LangChain, RAG pipelines, and conversational AI. My expertise includes OpenAI integration, local LLM deployment with Ollama, vector embeddings, semantic search, and context engineering.",
			color: "from-blue-500 to-purple-600",
		},
		{
			name: "Automation Engineering",
			skills: skills2,
			description:
				"I specialize in building sophisticated automation solutions using Puppeteer, browser scripting, and intelligent process automation. My expertise includes web automation, account generation systems, form automation, data extraction, and workflow optimization.",
			color: "from-green-500 to-teal-600",
		},
		{
			name: "Technical Infrastructure",
			skills: skills3,
			description:
				"I have extensive experience building and maintaining robust technical infrastructure supporting AI and automation systems. My expertise spans multiple programming languages, cloud platforms, database management, and system administration.",
			color: "from-orange-500 to-red-600",
		},
	];

	return (
		<div className="relative mx-auto max-w-6xl font-montserrat py-12 px-6 md:px-8">
			{/* Hero Section */}
			<section className="mb-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
					className="max-w-5xl mx-auto"
				>
					<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
								className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
							>
							{name}
							</motion.h1>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.7, duration: 0.8 }}
								className="space-y-4 mb-8"
							>
								{info.map((item) => (
									<div
										key={item}
										className="flex items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-gray-300"
									>
										<div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
										<span className="text-base md:text-lg font-medium">
											{item}
										</span>
						</div>
								))}
							</motion.div>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.9, duration: 0.8 }}
								className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
							>
								{summary}
							</motion.p>
						</div>
					</div>
				</motion.div>
			</section>

			{/* Skills Sections */}
			{skillSets.map((skillSet) => (
				<section key={skillSet.name} className="mb-24">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-center mb-16"
					>
						<h2 className="text-[1.75rem] font-medium text-foreground mb-6 tracking-tight">
							{skillSet.name}
						</h2>
						<div className="w-12 h-px bg-gradient-to-r from-transparent via-default-600 to-transparent mx-auto mb-8"></div>
					</motion.div>

					<div className="max-w-5xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="bg-content1/60 backdrop-blur-lg rounded-2xl p-8 mb-12 shadow-lg"
						>
							<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-normal text-center">
								{skillSet.description}
							</p>
						</motion.div>

						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{skillSet.skills.map(([skillName, years], index) => (
								<motion.div
									key={skillName}
									whileHover={{ scale: 1.05, y: -2 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.05, duration: 0.6 }}
									viewport={{ once: true }}
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
