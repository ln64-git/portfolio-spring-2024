"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { title } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import projectData from "../../content/project-data";

// Image Popup Component
const ImagePopup = ({
	selectedProject,
	onClose,
}: {
	selectedProject: (typeof projectData)[0] | null;
	onClose: () => void;
}) => {
	if (!selectedProject) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
				onClick={onClose}
			>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.8, opacity: 0 }}
					transition={{ type: "spring", duration: 0.5 }}
					className="relative max-w-4xl max-h-[90vh] w-full mx-2 sm:mx-0"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close button */}
					<button
						type="button"
						onClick={onClose}
						className="absolute -top-8 sm:-top-12 right-0 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors duration-200"
						aria-label="Close image popup"
					>
						<svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<title>Close icon</title>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* Image */}
					<div className="relative w-full h-full">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ 
								duration: 0.6, 
								ease: [0.25, 0.1, 0.25, 1] 
							}}
							className="w-full h-full"
						>
							<Image
								src={`/${selectedProject.image}.png`}
								alt={selectedProject.name}
								width={800}
								height={600}
								className="w-full h-full object-contain rounded-lg"
							/>
						</motion.div>
					</div>

					{/* Image info */}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
						<h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
							{selectedProject.name}
						</h3>
						<p className="text-white/80 text-xs sm:text-sm">
							{selectedProject.date}
						</p>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

// Project Modal Component
const ProjectModal = ({
	selectedProject,
	onClose,
	onImageClick,
}: {
	selectedProject: (typeof projectData)[0] | null;
	onClose: () => void;
	onImageClick: () => void;
}) => {
	if (!selectedProject) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
				onClick={onClose}
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					transition={{ type: "spring", duration: 0.5 }}
					className="relative bg-content1 dark:bg-content1/90 backdrop-blur-xl rounded-3xl p-12 max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-content2/20"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close Button */}
					<button
						type="button"
						onClick={onClose}
						className="absolute top-6 right-6 p-2 rounded-full bg-content2/20 hover:bg-content2/40 transition-colors duration-200"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Close modal"
						>
							<title>Close</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					{/* Modal Content */}
					<div className="grid md:grid-cols-2 gap-12">
						{/* Left Column - Image and Tech Stack */}
						<div className="space-y-8">
						<button 
							type="button"
							className="relative group w-full cursor-pointer border-none bg-transparent p-0 overflow-hidden rounded-3xl"
							onClick={onImageClick}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									onImageClick();
								}
							}}
							aria-label={`View full image of ${selectedProject.name}`}
						>
							<Image
								src={`/${selectedProject.image}.png`}
								alt={selectedProject.name}
								width={700}
								height={500}
								className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							{/* Click hint overlay */}
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
								<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<title>Magnifying glass icon</title>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
									</svg>
								</div>
							</div>
						</button>

							{/* Tech Stack */}
							<div>
								<h4 className="text-xl font-semibold text-foreground mb-6">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-3">
									{selectedProject.techArray.map((tech) => (
										<span
											key={tech}
											className="px-4 py-2.5 bg-primary/10 text-sm font-medium rounded-xl hover:bg-primary/20 transition-colors duration-200"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Right Column - Details */}
						<div className="space-y-8">
							{/* Header */}
							<div>
								<h2 className="text-4xl font-bold text-foreground mb-4">
									{selectedProject.name}
								</h2>
								<span className="text-base text-muted-foreground bg-primary/10 px-4 py-2 rounded-full">
									{selectedProject.date}
								</span>
							</div>

							{/* Description */}
							<div>
								<h4 className="text-xl font-semibold text-foreground mb-6">
									About This Project
								</h4>
								<p className="text-muted-foreground leading-relaxed text-lg">
									{selectedProject.summary}
								</p>
							</div>

							{/* Action Buttons */}
							<div className="flex gap-6 pt-4">
								<a
									href={selectedProject.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 px-8 py-4 bg-gradient-to-r from-button-primary-500 to-button-primary-700 dark:from-button-primary-dark-500 dark:to-button-primary-dark-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 text-center text-lg"
								>
									🔹 View on GitHub
								</a>
								{selectedProject.demoUrl && (
									<a
										href={selectedProject.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-8 py-4 bg-white/50 dark:bg-white/10 backdrop-blur-xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl font-medium transition-all duration-300 hover:bg-white/70 dark:hover:bg-white/20 hover:scale-105 text-center text-lg"
									>
										🔸 Live Demo
									</a>
								)}
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default function ProjectsPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedProject, setSelectedProject] = useState<
		(typeof projectData)[0] | null
	>(null);
	const [showImagePopup, setShowImagePopup] = useState(false);

	// Categorize projects
	const categories = {
		all: "All Projects",
		ai: "AI & Machine Learning",
		web: "Web Development",
		automation: "Automation & Tools",
		systems: "Systems & Infrastructure",
	};

	const categorizeProject = (project: (typeof projectData)[0]) => {
		const techString = project.techArray.join(" ").toLowerCase();
		const categories: string[] = [];
		
		// Check AI/ML
		if (
			techString.includes("ai") ||
			techString.includes("langchain") ||
			techString.includes("rag") ||
			techString.includes("openai") ||
			techString.includes("whisper") ||
			techString.includes("llms") ||
			techString.includes("rag-pipelines") ||
			techString.includes("vector-embeddings") ||
			techString.includes("xenova-transformers")
		) {
			categories.push("ai");
		}
		
		// Check automation
		if (
			techString.includes("automation") ||
			techString.includes("bot") ||
			techString.includes("puppeteer") ||
			techString.includes("web-automation") ||
			techString.includes("web-scraping") ||
			techString.includes("discordjs") ||
			techString.includes("cli") ||
			techString.includes("audio-management")
		) {
			categories.push("automation");
		}
		
		// Check systems/infrastructure
		if (
			techString.includes("rust") ||
			techString.includes("decentralized") ||
			techString.includes("cryptographic") ||
			techString.includes("database") ||
			techString.includes("distributed-systems") ||
			techString.includes("version-control") ||
			techString.includes("data-preservation") ||
			techString.includes("mongodb") ||
			techString.includes("redis") ||
			techString.includes("postgresql") ||
			techString.includes("springboot") ||
			techString.includes("java") ||
			techString.includes("prisma") ||
			techString.includes("orm") ||
			techString.includes("nodejs")
		) {
			categories.push("systems");
		}
		
		// Check web development (frontend-focused)
		if (
			techString.includes("nextjs") ||
			techString.includes("react") ||
			techString.includes("vue") ||
			techString.includes("web-development") ||
			techString.includes("web-app") ||
			techString.includes("web-application") ||
			techString.includes("zustand") ||
			techString.includes("redux") ||
			techString.includes("frontend") ||
			techString.includes("ui") ||
			techString.includes("ux")
		) {
			categories.push("web");
		}
		
		// If no categories matched, default to web
		if (categories.length === 0) {
			categories.push("web");
		}
		
		return categories;
	};

	const filteredProjects =
		selectedCategory === "all"
			? projectData
			: projectData.filter((project) => 
				categorizeProject(project).includes(selectedCategory)
			);

  return (
		<div className="relative mx-auto max-w-7xl font-montserrat py-4 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
			{/* Hero Section */}
			<section className="text-center mb-8 sm:mb-12 md:mb-16 pt-4 sm:pt-6 md:pt-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
					className="max-w-4xl mx-auto"
				>
					<TextGenerateEffect
						className={title({ size: "lg", color: "foreground" })}
						words="Innovative Projects & Technical Solutions"
						highlightedWords={[
							{ word: "Innovative", color: "blue" }
						]}
					/>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed font-normal mt-4 sm:mt-6 md:mt-8"
					>
						A collection of projects showcasing expertise in AI-driven
						automation, full-stack development, and innovative system design.
					</motion.p>
				</motion.div>
			</section>

			{/* Category Filter */}
			<section className="mb-12">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
					className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
				>
					{Object.entries(categories).map(([key, label]) => (
						<button
							key={key}
							type="button"
							onClick={() => setSelectedCategory(key)}
							className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
								selectedCategory === key
									? "bg-gradient-to-r from-button-primary-500 to-button-primary-700 dark:from-button-primary-dark-500 dark:to-button-primary-dark-700 text-white shadow-lg scale-105"
									: "bg-content1/60 dark:bg-content1/40 text-default-700 dark:text-default-300 hover:bg-content1/80 dark:hover:bg-content1/60 hover:scale-105"
							}`}
						>
							{label}
						</button>
					))}
				</motion.div>
			</section>

			{/* Projects Grid */}
			<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: index * 0.1,
								duration: 0.8,
								ease: [0.25, 0.1, 0.25, 1],
							}}
							viewport={{ once: true, margin: "-100px" }}
							whileHover={{ scale: 1.02, y: -4 }}
							className="group bg-content1/50 dark:bg-content1/30 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 shadow-lg hover:shadow-2xl hover:bg-content1/70 dark:hover:bg-content1/50 border border-content2/10 hover:border-content2/30 flex flex-col h-full cursor-pointer relative overflow-hidden"
							onClick={() => setSelectedProject(project)}
						>
						{/* Project Image */}
						<div className="mb-6 overflow-hidden rounded-2xl flex-shrink-0">
							<Image
								src={`/${project.image}.png`}
								alt={project.name}
								width={400}
								height={192}
								className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>

							{/* Project Header */}
							<div className="flex justify-between items-start mb-4 flex-shrink-0">
								<h3 className="text-xl font-bold text-foreground leading-tight tracking-tight flex-1 pr-4">
									{project.name}
								</h3>
								<span className="text-xs text-muted-foreground bg-muted px-3 py-2 rounded-full backdrop-blur-sm bg-primary/10 flex-shrink-0">
									{project.date}
								</span>
							</div>

							{/* Tech Stack */}
							<div className="mb-2 flex-shrink-0">
								<div className="flex flex-wrap gap-2 line-clamp-2">
									{project.techArray.slice(0, 6).map((tech) => (
										<span
											key={tech}
											className="inline-flex items-center px-4 py-2 bg-primary/10 text-xs font-medium rounded-lg hover:bg-primary/20 transition-colors duration-200 m-1"
										>
											{tech}
										</span>
									))}
									{project.techArray.length > 6 && (
										<span className="inline-flex items-center px-4 py-2 bg-primary/20 text-xs font-medium rounded-lg m-2">
											+{project.techArray.length - 6}
										</span>
									)}
      </div>
							</div>

							{/* Project Description */}
							<p className="text-muted-foreground text-sm leading-relaxed font-normal group-hover:text-foreground/80 transition-colors duration-300 mb-6 flex-grow">
								{project.summary}
							</p>

							{/* Action Buttons */}
							<div className="flex gap-3 flex-shrink-0">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className={`px-4 py-2.5 bg-gradient-to-r from-button-primary-500 to-button-primary-700 dark:from-button-primary-dark-500 dark:to-button-primary-dark-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 text-center ${
										project.demoUrl ? "flex-1" : "w-full"
									}`}
								>
									🔹 GitHub
								</a>
								{project.demoUrl && (
									<a
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="flex-1 px-4 py-2.5 bg-white/50 dark:bg-white/10 backdrop-blur-xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl font-medium transition-all duration-300 hover:bg-white/70 dark:hover:bg-white/20 hover:scale-105 text-center"
									>
										🔸 Demo
									</a>
								)}
							</div>
							
							{/* Bottom Fade Gradient for Card */}
							<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-content1/50 dark:from-content1/30 to-transparent pointer-events-none"></div>
						</motion.div>
					))}
				</section>

			{/* Empty State */}
			{filteredProjects.length === 0 && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-center py-16"
				>
					<div className="text-6xl mb-4">🔸</div>
					<h3 className="text-xl font-medium text-foreground mb-2">
						No projects found
					</h3>
					<p className="text-muted-foreground">
						Try selecting a different category.
					</p>
				</motion.div>
			)}

			{/* Project Modal */}
			<ProjectModal
				selectedProject={selectedProject}
				onClose={() => setSelectedProject(null)}
				onImageClick={() => setShowImagePopup(true)}
			/>

			{/* Image Popup */}
			{showImagePopup && (
				<ImagePopup
					selectedProject={selectedProject}
					onClose={() => setShowImagePopup(false)}
				/>
			)}
    </div>
  );
}
