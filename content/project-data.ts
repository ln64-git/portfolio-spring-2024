const projectData = [
	{
		name: "Arc Decentralized Archive System",
		date: "April 2025",
		summary:
			"Developed a decentralized, versioned, cryptographically-verifiable archive system designed to help people, conversations, and institutions preserve data securely across devices. Built with Rust for performance and security, featuring cryptographic verification and decentralized architecture for reliable data preservation.",
		image: "arc",
		techArray: [
			"rust",
			"decentralized",
			"cryptographic",
			"archive",
			"version-control",
		],
		githubUrl: "https://github.com/ln64-git/arc",
	},
	{
		name: "Nayru TTS Application",
		date: "June 2025",
		summary:
			"Built a sophisticated Text-to-Speech application using TypeScript and Bun runtime. Features multi-provider TTS support (Azure Cognitive Services and Google Cloud Text-to-Speech), custom AudioController with queue management and mpv integration, CLI interface for audio operations, and persistent state management. Demonstrates comprehensive testing with Vitest and advanced audio workflow management.",
		image: "nayru",
		techArray: [
			"typescript",
			"dynamic-server",
			"azure-cognitive-services",
			"google-cloud-tts",
			"audio-management",
			"command-line",
			"state-management",
			"vitest",
		],
		githubUrl: "https://github.com/ln64-git/nayru",
	},
	{
		name: "Jackpota Automation Bot",
		date: "August 2025",
		summary:
			"Engineered an automated bot using Puppeteer and Bun for sweepstakes platforms that exploits promotional credits by generating multiple accounts. Features intelligent account creation with realistic user data via RandomUser.me API, automated email verification through disposable mail services, form automation with fallback strategies, popup handling for promotional offers, and automated gameplay to claim welcome bonuses. Demonstrates advanced web automation, API integration, and reverse engineering of sweepstakes platform interfaces.",
		image: "jackpota",
		techArray: [
			"typescript",
			"bun",
			"puppeteer",
			"sweepstakes-automation",
			"account-generation",
			"bonus-claiming",
			"disposable-email",
			"web-scraping",
			"automated-registration",
		],
		githubUrl: "https://github.com/ln64-git/jackpota",
	},
	{
		name: "Luma AI Knowledge Engine",
		date: "May 2025",
		summary:
			"Engineered Obsidian-native RAG pipeline with LangChain/Ollama for semantic note search, achieving 95% accuracy via bidirectional clustering and sub-second queries on unstructured Markdown. Implemented local Xenova Transformers for vector embeddings and cosine similarity analysis, enabling privacy-preserving topic extraction and automatic organization of journal entries and thoughts.",
		image: "luma",
		techArray: ["typescript", "langchain", "ollama", "xenova", "rag"],
		githubUrl: "https://github.com/ln64-git/luma-knowledge-engine",
	},
	{
		name: "Arcados Discord Bot",
		date: "September 2024",
		summary:
			"Developed AI-powered moderation pipeline with RAG for behavioral detection/summaries, real-time voice management, and self-healing across 200+ users. Implemented Redis-cached sync, conflict resolution, and performance monitoring for scalable Discord community management.",
		image: "arcados-bot",
		techArray: [
			"typescript",
			"nodejs",
			"discordjs",
			"langchain",
			"mongodb",
			"redis",
			"pinecone",
		],
		githubUrl: "https://github.com/ln64-git/arcados-discord-bot",
	},
	{
		name: "Map Generator",
		date: "October 2024",
		summary:
			"Developed a comprehensive map generation application using TypeScript and modern web technologies. Features algorithmic map creation, interactive visualization, and procedural generation capabilities. Demonstrates expertise in data visualization, algorithmic design, and user interface development with real-time rendering capabilities.",
		image: "map-generator",
		techArray: [
			"typescript",
			"nextjs",
			"data-visualization",
			"procedural-generation",
			"interactive-graphics",
			"algorithmic-design",
		],
		githubUrl: "https://github.com/ln64-git/map-generator",
	},
	{
		name: "Sira Conversational AI Assistant",
		date: "May 2024",
		summary:
			"Developed a conversational AI assistant featuring real-time token streaming that chunks and sequences LLM responses across multiple provider models, enabling seamless integration between local and remote systems with concurrent audio synthesis. Implemented voice-to-voice pipeline using Whisper.cpp for transcription, Azure/Google TTS from sequenced chunks, and CLI/HTTP interface with auto-routing for scalable deployment.",
		image: "sira",
		techArray: ["typescript", "bun", "langchain", "openai", "azure", "whisper"],
		githubUrl: "https://github.com/ln64-git/sira-conversational-ai",
	},
	{
		name: "Personal Portfolio",
		date: "January 2024",
		summary:
			"Developed a modern and lightweight portfolio website that showcases proficiency in advanced CSS techniques and seamless integration of JavaScript libraries including Framer Motion and EmailJS. The portfolio effectively demonstrates a deep understanding of front-end development best practices and the ability to create visually appealing and interactive user experiences.",
		image: "portfolio",
		techArray: ["next", "react"],
		demoUrl: "https://lukeanthony007.com/",
		githubUrl: "https://github.com/ln64-git/vite-react-portfolio",
	},
	{
		name: "Splitscreen Video",
		date: "November 2023",
		summary:
			"Created a responsive, web-based multi-screen media player utilizing Zustand for efficient state management. The application, designed for sporting events, audio/visual technicians, and multitasking enthusiasts, highlights the ability to develop innovative solutions that cater to specific user needs. The project demonstrates adequate skill in JavaScript and the effective use of modern state management libraries.",
		image: "splitscreen-video",
		techArray: ["next", "react", "zustand"],
		demoUrl: "https://splitscreen-video.vercel.app/",
		githubUrl: "https://github.com/ln64-git/splitscreen-video",
	},
	{
		name: "CinDay Computer Database",
		date: "July 2023",
		summary:
			"Created efficient ticketing solution in Next.js/Prisma with ORM/state management integration, enhancing support workflow speed and scalability for educational technology management.",
		image: "database",
		techArray: ["next", "react", "prisma", "redux"],
		demoUrl: "https://computer-database-demo.vercel.app/",
		githubUrl: "https://github.com/ln64-git/database-ui",
	},
	{
		name: "StockOverflow",
		date: "December 2022",
		summary:
			"Built a full-stack Vue application that seamlessly integrates with a RESTful API to store and manage entries in a PostgreSQL database. Implemented user authentication and developed a reactive front-end interface that enables users to perform CRUD operations on shared inventory lists. This project highlights the ability to work with diverse technologies, create secure user authentication systems, and develop intuitive user interfaces for enhanced user engagement.",
		image: "stockOverflow",
		techArray: ["vue", "springboot", "java"],
		githubUrl: "https://github.com/ln64-git/stockOverflow",
	},
];

export default projectData;
