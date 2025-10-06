"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Experience from "@/components/experience";
import { title } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import experienceData from "../../content/experience-data";

interface ExperienceItem {
	company: string;
	duration: string;
	image: string;
	role: string;
	summary: string;
	bulletArray: string[];
}

// Experience Modal Component
const ExperienceModal = ({
	selectedExperience,
	onClose,
	onImageClick,
}: {
	selectedExperience: ExperienceItem | null;
	onClose: () => void;
	onImageClick: () => void;
}) => {
	if (!selectedExperience) return null;

	const durationParts = selectedExperience.duration.split(" - ");
	const startDate = durationParts[0];
	const endDate = durationParts[1] === "Current" ? "Present" : durationParts[1];

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
					className="relative bg-content1/90 dark:bg-content1/80 backdrop-blur-xl rounded-3xl p-6 max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-content2/10"
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
					<div className="space-y-4 h-full flex flex-col">
						{/* Header Section */}
						<div className="text-center">
							<div className="inline-flex items-center gap-2 px-6 py-3 bg-content2/10 rounded-full text-base font-medium text-foreground mb-3">
								{selectedExperience.company}
							</div>
							
							<h2 className="text-5xl font-bold text-foreground mb-3">
								{selectedExperience.role}
							</h2>
							
							<div className="flex items-center justify-center gap-6 mt-8 mb-4">
								<span className="text-base text-muted-foreground bg-primary/10 px-4 py-2 rounded-full">
									{startDate}
								</span>
								<span className="text-muted-foreground">—</span>
								<span className="text-base text-muted-foreground bg-primary/10 px-4 py-2 rounded-full">
									{endDate}
								</span>
							</div>
						</div>

						{/* Image Section */}
						<div className="flex justify-center">
							<button 
								type="button"
								className="relative group w-96 h-56 cursor-pointer border-none bg-transparent p-0"
								onClick={onImageClick}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										onImageClick();
									}
								}}
								aria-label={`View full image of ${selectedExperience.company}`}
							>
								<div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl blur-sm"></div>
								<div className="relative w-full h-full overflow-hidden rounded-2xl">
									<Image
										src={`/${selectedExperience.image}.png`}
										alt={selectedExperience.company}
										width={384}
										height={224}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
									/>
								</div>
								{/* Click hint overlay */}
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center">
									<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<title>Magnifying glass icon</title>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
									</svg>
									</div>
								</div>
							</button>
						</div>

						{/* Summary Section */}
						<div className="bg-gradient-to-br from-content2/10 to-content2/5 rounded-2xl pt-4 border border-content2/20">
							<div className="mb-4">
								<h4 className="text-2xl font-bold text-foreground list-none">Role Overview</h4>
							</div>
							<p className="text-muted-foreground leading-relaxed text-lg">
								{selectedExperience.summary}
							</p>
						</div>

						{/* Key Achievements Section */}
						<div className="bg-gradient-to-br from-content2/10 to-content2/5 rounded-2xl p-6 border border-content2/20 flex-1">
							<div className="mb-4">
								<h4 className="text-2xl font-bold text-foreground list-none">Key Achievements</h4>
							</div>
							
							<div className="space-y-3 max-h-48 overflow-y-auto">
								{selectedExperience.bulletArray.map((bullet, index) => (
									<div
										key={`${selectedExperience.company}-modal-bullet-${index}`}
										className="group flex items-start gap-4 p-3 rounded-xl hover:bg-content2/10 transition-all duration-200"
									>
										<div className="flex-shrink-0 w-3 h-3 bg-foreground rounded-full mt-2 group-hover:scale-110 transition-transform duration-200"></div>
										<span className="text-base text-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-200">
											{bullet}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

// Image Popup Component
const ImagePopup = ({
	selectedExperience,
	onClose,
}: {
	selectedExperience: ExperienceItem | null;
	onClose: () => void;
}) => {
	if (!selectedExperience) return null;

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
					className="relative max-w-4xl max-h-[90vh] w-full"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close button */}
					<button
						type="button"
						onClick={onClose}
						className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors duration-200"
						aria-label="Close image popup"
					>
						<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<title>Close icon</title>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* Image */}
					<div className="relative w-full h-full">
						<Image
							src={`/${selectedExperience.image}.png`}
							alt={selectedExperience.company}
							width={800}
							height={600}
							className="w-full h-full object-contain rounded-lg"
						/>
					</div>

					{/* Image info */}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
						<h3 className="text-white text-xl font-semibold mb-1">
							{selectedExperience.company}
						</h3>
						<p className="text-white/80 text-sm">
							{selectedExperience.role}
						</p>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default function ExperiencePage() {
	const [selectedExperience, setSelectedExperience] =
		useState<ExperienceItem | null>(null);
	const [showImagePopup, setShowImagePopup] = useState(false);

	return (
		<div className="relative mx-auto max-w-7xl font-montserrat py-12 px-6 md:px-8">
			{/* Hero Section */}
			<section className="text-center mb-16 pt-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
					className="max-w-4xl mx-auto"
				>
					<TextGenerateEffect
						className={title({ size: "lg", color: "foreground" })}
						words="Professional Experience & Career Journey"
					/>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-normal mt-8"
					>
						A comprehensive overview of my professional journey, showcasing
						diverse experiences across technology, culinary arts, and business
						operations.
					</motion.p>
				</motion.div>
			</section>

			{/* Experience Timeline */}
			<section className="space-y-12">
				{experienceData.map((experience: ExperienceItem, index: number) => (
					<motion.div
						key={`${experience.company}-${experience.role}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: index * 0.2,
							duration: 0.8,
							ease: [0.25, 0.1, 0.25, 1],
						}}
						whileHover={{ scale: 1.02, y: -4 }}
						onClick={() => setSelectedExperience(experience)}
						className="cursor-pointer group"
					>
						<Experience
							company={experience.company}
							duration={experience.duration}
							image={experience.image}
							role={experience.role}
							summary={experience.summary}
							bulletArray={experience.bulletArray}
						/>
					</motion.div>
				))}
			</section>

			{/* Experience Modal */}
			<ExperienceModal
				selectedExperience={selectedExperience}
				onClose={() => setSelectedExperience(null)}
				onImageClick={() => setShowImagePopup(true)}
			/>

			{/* Image Popup */}
			{showImagePopup && (
				<ImagePopup
					selectedExperience={selectedExperience}
					onClose={() => setShowImagePopup(false)}
				/>
			)}
		</div>
	);
}
