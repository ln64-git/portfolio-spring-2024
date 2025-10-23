"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { title } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { topSkills } from "@/content/home-data";

export default function Home() {
  // Highlight Arc, Luma, and Sira projects
  const featuredProjects = [
    {
      name: "Arc Decentralized Archive System",
      date: "July 2025",
      skills: "Rust, Distributed Systems, Cryptographic Verification",
      summary: "Rust-built decentralized archive that rejects cloud dependency. Merkle proofs ensure tamper-proof history. Zero-knowledge sync lets nodes exchange data without exposure. DAG versioning preserves every state—no merges, nothing lost. Offline-first, self-healing, no central authority. Data that survives what kills everything else."
    },
    {
      name: "Luma AI Knowledge Engine",
      date: "June 2025",
      skills: "TypeScript, LangChain, LLMs, RAG Pipelines",
      summary: "An Obsidian plugin that indexes and retrieves notes via local embeddings. Xenova handles vectorization client-side. LangChain orchestrates the RAG pipeline—takes queries, finds relevant chunks, synthesizes responses. Cosine similarity clusters related notes automatically, surfacing connections you missed. Everything stays local."
    },
    {
      name: "Sira Conversational AI Assistant",
      date: "March 2025",
      skills: "TypeScript, Bun, LangChain, OpenAI, Azure, Whisper",
      summary: "An offline-first voice assistant that routes queries through local or remote LLMs—no internet required. Whisper transcribes audio in real time. LangChain chunks responses, streams them back token-by-token so speech feels human. Built for when the grid dies or privacy kicks in."
    }
  ];
  
  return (
        <div className="relative w-full font-montserrat py-4 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 pt-2 sm:pt-4 md:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full"
        >
          <TextGenerateEffect
            className={title({ size: "lg", color: "foreground" })}
            words="Full-stack developer specializing in AI-driven automation and intelligent systems"
            highlightedWords={[
              { word: "Full-stack", color: "violet" },
              { word: "automation", color: "blue" },
              { word: "intelligent", color: "yellow" }
            ]}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed font-normal mt-3 sm:mt-4 md:mt-6"
          >
            TypeScript, Next.js, LangChain, RAG pipelines, OpenAI.<br />Building hybrid systems that prioritize privacy without sacrificing speed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center"
          >
            <Link
              href="/projects"
              className="group relative px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-button-primary-500 to-button-primary-700 dark:from-button-primary-dark-500 dark:to-button-primary-dark-700 text-white rounded-xl font-medium transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-[1.02] backdrop-blur-md text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 group-hover:translate-x-0.5 opacity-90" fill="currentColor" viewBox="0 0 20 20" aria-label="Projects icon">
                  <title>Projects icon</title>
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-button-primary-600 to-button-primary-800 dark:from-button-primary-dark-600 dark:to-button-primary-dark-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl backdrop-blur-sm"></div>
            </Link>
            <Link
              href="/about"
              className="group relative px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl font-medium transition-all duration-500 shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-white/70 dark:hover:bg-white/10 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 group-hover:translate-x-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20" aria-label="Info icon">
                  <title>Info icon</title>
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Learn More
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 w-full max-w-4xl mx-auto">
        {[
          { number: "5+", label: "Years Experience", href: "/about" },
          { number: "11", label: "Projects", href: "/projects" },
          { number: "100%", label: "Satisfaction", href: "/projects" },
          { number: "32+", label: "Skills", href: "/about" }
        ].map((stat, index) => (
          <Link key={stat.label} href={stat.href}>
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-content1/60 backdrop-blur-lg rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-102 hover:bg-content1/80 flex flex-col items-center justify-center text-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-foreground mb-1 sm:mb-2 tracking-tight">{stat.number}</div>
              <div className="text-xs sm:text-xs md:text-sm text-default-600 font-light tracking-[0.05em] uppercase leading-tight whitespace-nowrap">{stat.label}</div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Project Showcase */}
      <section className="mb-6 sm:mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-[1.75rem] font-medium text-foreground mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Recent Work
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-default-600 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.name}
              href={`/projects?project=${encodeURIComponent(project.name)}`}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="group bg-content1/50 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-500 shadow-lg hover:shadow-2xl hover:bg-content1/70 border border-content2/10 hover:border-content2/30 h-auto sm:h-[420px] md:h-[450px] flex flex-col cursor-pointer"
              >
              {/* Header Section */}
              <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
                <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight flex-1 pr-4  transition-colors duration-300">
                  {project.name}
                </h3>
                <span className="text-xs  text-muted-foreground bg-muted px-3 py-2 rounded-full backdrop-blur-sm bg-primary/10 ">
                  {project.date}
                </span>
              </div>
              
              {/* Skills Section */}
              <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
                {project.skills.split(", ").slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10  text-xs font-medium rounded-lg  hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Description Section */}
              <p className="text-foreground/70 text-sm leading-relaxed font-normal group-hover:text-foreground/80 transition-colors duration-300 flex-grow overflow-hidden">
                {project.summary}
              </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Bubble Cloud */}
      <section className="text-center pb-8 sm:pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <h2 className="text-[1.75rem] font-medium text-foreground mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Technologies
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-default-600 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-4xl mx-auto">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, rotate: -1 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-6 py-3 bg-content1/60 backdrop-blur-lg text-default-700 text-[0.9rem] rounded-2xl transition-all duration-600 hover:bg-content1/80 hover:scale-105 hover:-translate-y-1 font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}