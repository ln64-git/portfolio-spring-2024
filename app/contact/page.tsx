"use client";
import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { AnimatePresence, motion } from "framer-motion";
import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { title } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function ContactPage() {
	const form = useRef<HTMLFormElement | null>(null);
	const [emailStatus, setEmailStatus] = useState<"success" | "failure" | null>(
		null,
	);

  const sendEmail = (e: FormEvent) => {
		e.preventDefault();
		if (form.current) {
			emailjs
				.sendForm(
					"service_ut19eu5",
					"template_k6z538t",
					form.current,
					"k9dk_PHS4Rax1XBz_",
				)
				.then(() => {
					setEmailStatus("success");
				})
				.catch((error: { text: string }) => {
					console.log(error.text);
					setEmailStatus("failure");
				});
		}
	};

	const contactInfo = [
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Email icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			title: "Email",
			value: "ln64.ohio@outlook.com",
			description: "Let's work together",
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Location icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			title: "Location",
			value: "Cincinnati, OH",
			description: "Available for remote work",
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Clock icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			title: "Response Time",
			value: "Within 24 hours",
			description: "I'll get back to you quickly",
		},
	];

	return (
		<div className="relative mx-auto max-w-7xl font-montserrat py-4 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
			{/* Hero Section */}
			<section className="text-center mb-8 sm:mb-12 md:mb-16 pt-4 sm:pt-6 md:pt-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
					className="max-w-4xl mx-auto"
				>
					<TextGenerateEffect
						className={title({ size: "lg", color: "foreground" })}
						words="Let's Build Something Amazing Together"
					/>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed font-normal mt-4 sm:mt-6 md:mt-8"
					>
						Ready to discuss your next AI-driven project or automation solution?
						I&apos;d love to hear about your ideas and explore how we can work
						together.
					</motion.p>
				</motion.div>
			</section>

			<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
				{/* Contact Information Cards */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
					className="space-y-8"
				>
					<div>
						<h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
							Get in Touch
						</h2>
						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.title}
									whileHover={{ scale: 1.02, y: -2 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
									className="bg-content1/60 backdrop-blur-lg rounded-2xl p-6 transition-all duration-500 shadow-lg hover:shadow-xl hover:bg-content1/80 group"
								>
									<div className="flex items-start gap-4">
										<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
											{info.icon}
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-semibold text-foreground mb-1">
												{info.title}
											</h3>
											<p className="text-foreground font-medium mb-1">
												{info.value}
											</p>
											<p className="text-muted-foreground text-sm">
												{info.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

	

				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
					className="bg-content1/50 backdrop-blur-xl rounded-3xl p-8 shadow-lg "
				>
					<h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
						Send a Message
					</h2>

					<form
						ref={form}
						autoComplete="false"
						onSubmit={sendEmail}
						className="space-y-6"
					>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7, duration: 0.6 }}
						>
								<Input
									color="primary"
									type="text"
									name="user_name"
									label="Name"
									placeholder="Your full name"
									className="w-full"
									variant="flat"
									size="lg"
									isRequired
								/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.6 }}
						>
								<Input
									color="primary"
									type="email"
									name="user_email"
									label="Email"
									placeholder="your.email@example.com"
									className="w-full"
									variant="flat"
									size="lg"
									isRequired
								/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9, duration: 0.6 }}
						>
								<Textarea
									color="primary"
									name="message"
									label="Message"
									placeholder="Tell me about your project or idea..."
									className="w-full"
									variant="flat"
									minRows={5}
									isRequired
								/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.0, duration: 0.6 }}
							className="pt-4"
						>
							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-button-primary-500 to-button-primary-700 dark:from-button-primary-dark-500 dark:to-button-primary-dark-700 text-white font-medium py-6 text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
								size="lg"
							>
								<span className="flex items-center gap-2">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<title>Send icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
										/>
									</svg>
									Send Message
								</span>
							</Button>
						</motion.div>

						{/* Status Messages */}
						<AnimatePresence>
							{emailStatus === "success" && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="bg-green-500/10 rounded-xl p-4 text-center"
								>
									<div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Success icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="font-medium">
											🔹 Message sent successfully!
										</span>
									</div>
								</motion.div>
							)}

							{emailStatus === "failure" && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="bg-red-500/10 rounded-xl p-4 text-center"
								>
									<div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Error icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
										<span className="font-medium">
											🔸 Failed to send message. Please try again.
										</span>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</form>
				</motion.div>
			</div>
		</div>
	);
}
