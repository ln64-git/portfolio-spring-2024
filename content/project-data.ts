const projectData = [
	{
		name: "Arc Decentralized Archive System",
		date: "July 2025",
		summary:
			"Rust-built decentralized archive that rejects cloud dependency. Merkle proofs ensure tamper-proof history. Zero-knowledge sync lets nodes exchange data without exposure. DAG versioning preserves every state—no merges, nothing lost. Offline-first, self-healing, no central authority. Transport-agnostic: data stays secure whether syncing over p2p, mesh networks, dead drops. Built as a practical answer to data lock-in: your files, your records, uncensorable. Data that survives what kills everything else.",
		image: "arc",
		techArray: [
			"rust",
			"distributed-systems",
			"cryptographic-verification",
			"version-control",
			"data-preservation",
		],
		githubUrl: "https://github.com/ln64-git/arc",
	},
	{
		name: "Luma AI Knowledge Engine",
		date: "June 2025",
		summary:
			"An Obsidian plugin that indexes and retrieves notes via local embeddings. Xenova handles vectorization client-side. LangChain orchestrates the RAG pipeline—takes queries, finds relevant chunks, synthesizes responses into a wiki-style markdown database. Cosine similarity clusters related notes automatically, surfacing connections you missed. Everything stays local. No dependencies on external APIs. Built for any person or team managing scattered information.",
		image: "luma",
		techArray: [
			"typescript",
			"langchain",
			"llms",
			"rag-pipelines",
			"vector-embeddings",
			"xenova-transformers",
		],
		githubUrl: "https://github.com/ln64-git/luma",
	},
	{
		name: "Sira Conversational AI Assistant",
		date: "March 2025",
		summary:
			"An offline-first voice assistant that routes queries through local or remote LLMs—no internet required. Whisper transcribes audio in real time. LangChain chunks responses, streams them back token-by-token so speech feels human. Built for when the grid dies or privacy kicks in.",
		image: "sira",
		techArray: ["typescript", "bun", "langchain", "openai", "azure", "whisper"],
		githubUrl: "https://github.com/ln64-git/sira",
	},
	{
		name: "Community AI Engine",
		date: "September 2024",
		summary:
			"A RAG-driven analyzer that transforms raw Discord chat into detailed relational maps—no spying, just clear insight. LangChain meticulously extracts keywords, Xenova embeds messages locally with precision. Surfaces hidden alliances, drama clusters, and subtle behavioral shifts—insights moderators would never catch. Built to distill actionable intelligence from the noise, keeping every byte in-house without feeding it to outsiders. Tailored for teams needing early warning on fractures, pinpointing who truly steers the discussion, or tracking influence patterns over time. Data remains locked locally, self-healing if nodes fail. Intelligence wins, every time.",
		image: "arcados-bot",
		techArray: [
			"typescript",
			"bun",
			"discordjs",
			"langchain",
			"mongodb",
			"redis",
			"llms",
			"rag-pipelines",
			"xenova-transformers",
		],
		githubUrl: "https://github.com/ln64-git/arcados-bot",
	},
	{
		name: "Jackpota Automation Bot",
		date: "December 2024",
		summary:
			"Puppeteer-powered exploit of sweepstakes casino promos—no laws bent, just lazy rules gamed. Generates realistic users via RandomUser.me API, spins disposable emails on mail.tm for verification, fills forms. Handles popups, claims bonuses, and automates Spin-a-Win gameplay to cash out free credits—zero bans. Built to reverse-engineer UX flaws, harvest what's freely given, and walk away clean. For anyone testing automation limits without crossing lines.",
		image: "jackpota",
		techArray: [
			"typescript",
			"nodejs",
			"web-scraping",
			"web-automation",
			"puppeteer",
		],
		githubUrl: "https://github.com/ln64-git/jackpota",
	},
	{
		name: "Map Generator",
		date: "July 2024",
		summary:
			"AI-powered visualizer that turns prompts into maps—no manual GIS. GPT-4 via LangChain generates data from historical knowledge—routes, events, trade networks, geographic features; Next.js manages server-side processing, Mapbox renders interactive layers. Built for historians, educators, researchers tracing real threads.",
		image: "map-generator",
		techArray: [
			"typescript",
			"nextjs",
			"llms",
			"data-visualization",
			"interactive-graphics",
		],
		githubUrl: "https://github.com/ln64-git/map-generator",
	},
	{
		name: "Nayru TTS Application",
		date: "March 2024",
		summary:
			"CLI-driven voice tool built on Bun and TypeScript. Delivers smooth, seamless audio playback with a lightweight, efficient scheduler that handles multiple requests without stuttering. Offers basic commands for straightforward control. Designed for terminal users—devs, sysadmins, or anyone—needing dependable speech output in headless environments, whether scripting servers or managing offline rigs. Compact footprint, privacy baked in.",
		image: "nayru",
		techArray: [
			"typescript",
			"bun",
			"azure-cognitive-services",
			"google-cloud-tts",
			"audio-management",
			"cli",
		],
		githubUrl: "https://github.com/ln64-git/nayru",
	},
	{
		name: "Personal Portfolio",
		date: "January 2024",
		summary:
			"Next.js + TypeScript portfolio with flexible theming. Features dynamic animations with Framer Motion, responsive design, and zero-load contact forms via EmailJS. Built with Tailwind CSS and HeroUI. Demonstrates clean code architecture, smooth animations, and attention to detail.",
		image: "portfolio",
		techArray: ["typescript", "reactjs", "nextjs", "tailwindcss", "framer-motion"],
		demoUrl: "https://lukeanthony007.com/",
		githubUrl: "https://github.com/ln64-git/vite-react-portfolio",
	},
	{
		name: "Splitscreen Video",
		date: "September 2023",
		summary:
			"Next.js multi-screen player with TypeScript and Zustand for state control—no lag, no mess. Streams synced video feeds for sports techs, AV crews, or multitaskers. Built to handle real-time splits without crashing—responsive, lean, and tailored. Shows I can wire up complex UIs that deliver.",
		image: "splitscreen-video",
		techArray: ["typescript", "nextjs", "react", "zustand"],
		demoUrl: "https://splitscreen-video.vercel.app/",
		githubUrl: "https://github.com/ln64-git/splitscreen-video",
	},
	{
		name: "CinDay Computer Database",
		date: "July 2023",
		summary:
			"Next.js dashboard that streamlines IT ticketing for educational tech—no more ticket black holes. Prisma ORM automates device tracking and support routing, Redux manages state for real-time updates across admins and users. Handles hardware logs, issue classification, and workflow queues with zero manual drudgery. Built to slash support tickets by automating the grind, freeing IT to fix instead of file. Runs lean on Vercel, data locked local.",
		image: "database",
		techArray: ["nextjs", "react", "prisma", "redux"],
		demoUrl: "https://computer-database-demo.vercel.app/",
		githubUrl: "https://github.com/ln64-git/cinday-computer-database",
	},
	{
		name: "StockOverflow",
		date: "December 2022",
		summary:
			"Full-stack inventory tracker for shared lists—no spreadsheets, no chaos. Vue.js front-end with Nuxt.js and Pinia delivers reactive CRUD ops; Spring Boot back-end exposes RESTful API, secured by JWT auth. PostgreSQL persists entries, Axios bridges the gap for seamless sync. Built to handle group hoarding—groceries, tools, whatever—with zero access leaks. For roommates or teams ditching email chains. Control shared, data tight.",
		image: "stockOverflow",
		techArray: ["vue", "springboot", "java"],
		githubUrl: "https://github.com/ln64-git/stockOverflow",
	},
];

export default projectData;
