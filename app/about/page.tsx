"use client";
import {
	Accordion,
	AccordionItem,
	Image,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";

import aboutData from "@/content/about-data";

export default function AboutPage() {
	const { name, info, skills1, skills2, skills3, summary } = aboutData;

	const skillSets = [
		{ name: "AI & Machine Learning", skills: skills1 },
		{ name: "Automation Engineering", skills: skills2 },
		{ name: "Technical Infrastructure", skills: skills3 },
	];

	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	return (
		<div id="About" className=" w-full mx-auto max-w-[1250px] font-montserrat ">
			<div className="px-6  mx-auto w-full flex max-w-[700px] items-center  h-[265px] md:h-[405px]">
				<div className="flex  w-2/6 items-center justify-center">
					<Image
						width={150}
						alt="NextUI hero Image"
						src="https://i.imgur.com/PbMQHyX.jpeg"
						// className="h-[200px] w-[130px]"
					/>
				</div>
				<div className=" flex items-center  justify-center">
					<div className="  ml-2 md:ml-12 flex flex-col items-center ">
						<div className="inline text-3xl  md:text-3xl text-left pb-1 w-full px-4 md:px-0">
							{name}
						</div>

						<div className="px-auto mx-auto max-w-[400px]  w-full text-sm px-4 md:px-0 sm:text-lg text-left justify-center">
							<ul>
								{info.map((element, index) => (
									<li key={index} className="text-sm my-2 font-light text-left">
										{element}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-4 ">
				<div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
					<h1 className="max-w-[700px] inline  text-2xl md:text-3xl text-left  w-full ">
						About me
					</h1>
					<p className="pb-4 leading-7 md:leading-8 text-sm px-auto mx-auto pt-2 text-left  text-md items-center justify-center max-w-[700px] ">
						AI and automation specialist leveraging technology to overcome
						visual impairment while building innovative solutions. Expert in
						developing intelligent automation systems, conversational AI
						assistants, and semantic search engines using advanced technologies
						like LangChain and RAG pipelines. Demonstrates strong technical
						background in cybersecurity, IT operations, and process
						optimization.
					</p>
					<h1 className="max-w-[700px] mt-4 inline  text-xl md:text-2xl text-left  w-full ">
						AI & Machine Learning
					</h1>

					<p className="leading-7 md:leading-8 text-sm px-auto mx-auto pt-2 text-left  text-md items-center justify-center max-w-[700px] ">
						I have built multiple AI-driven applications using LangChain, RAG
						pipelines, and conversational AI. My expertise includes OpenAI
						integration, local LLM deployment with Ollama, vector embeddings,
						semantic search, and context engineering. I am constantly expanding
						my knowledge to deliver cutting-edge AI solutions that bridge
						machine learning capabilities with practical applications.
					</p>
				</div>
				<div className="pt-4 max-w-[700px] mx-auto">
					<Accordion variant="splitted">
						<AccordionItem key="1" aria-label="Skills" title="Skills">
							<Table
								removeWrapper={false}
								aria-label="Example static collection table"
							>
								<TableHeader>
									<TableColumn className="text-left">NAME</TableColumn>
									<TableColumn className="text-right">YEARS</TableColumn>
								</TableHeader>
								<TableBody>
									{skills1.map(([name, years], index) => (
										<TableRow key={index}>
											<TableCell className="text-left text-lg">
												{name}
											</TableCell>
											<TableCell className="text-right">{years}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</AccordionItem>
					</Accordion>
				</div>
			</div>

			<div className="pt-10">
				<div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
					<h1 className="max-w-[700px] inline  text-xl md:text-2xl text-left  w-full ">
						Automation Engineering
					</h1>
					<p className="leading-7 md:leading-8 text-sm px-auto mx-auto pt-2 text-left text-md items-center justify-center max-w-[700px] ">
						I specialize in building sophisticated automation solutions using
						Puppeteer, browser scripting, and intelligent process automation. My
						expertise includes web automation, account generation systems, form
						automation, data extraction, and workflow optimization. I design
						efficient and maintainable automation architectures that seamlessly
						integrate with AI systems and cloud services.
					</p>
				</div>
				<div className="pt-4 max-w-[700px] mx-auto">
					<Accordion variant="splitted">
						<AccordionItem key="1" aria-label="Skills" title="Skills">
							<Table
								removeWrapper={false}
								aria-label="Example static collection table"
							>
								<TableHeader>
									<TableColumn className="text-left">NAME</TableColumn>
									<TableColumn className="text-right">YEARS</TableColumn>
								</TableHeader>
								<TableBody>
									{skills2.map(([name, years], index) => (
										<TableRow key={index}>
											<TableCell className="text-left text-lg">
												{name}
											</TableCell>
											<TableCell className="text-right">{years}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			<div className="py-10 ">
				<div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
					<h1 className="max-w-[700px] inline  text-xl md:text-2xl text-left  w-full  ">
						Technical Infrastructure
					</h1>
					<p className="leading-7 md:leading-8 text-sm px-auto mx-auto pt-2 text-left text-md items-center justify-center max-w-[700px] ">
						I have extensive experience building and maintaining robust
						technical infrastructure supporting AI and automation systems. My
						expertise spans multiple programming languages (TypeScript, Python,
						Rust), cloud platforms (Azure, Google Cloud), database management
						(MongoDB, Pinecone, Redis), and system administration. I maintain
						focus on performance optimization and scalable architecture design
						to support enterprise-level AI applications.
					</p>
				</div>
				<div className="pt-4 max-w-[700px] mx-auto">
					<Accordion variant="splitted">
						<AccordionItem key="1" aria-label="Skills" title="Skills">
							<Table aria-label="Example static collection table">
								<TableHeader>
									<TableColumn className="text-left">NAME</TableColumn>
									<TableColumn className="text-right">YEARS</TableColumn>
								</TableHeader>
								<TableBody>
									{skills3.map(([name, years], index) => (
										<TableRow key={index}>
											<TableCell className="text-left text-lg">
												{name}
											</TableCell>
											<TableCell className="text-right">{years}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
