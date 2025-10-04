"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { title } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { topSkills } from "@/content/home-data";

export default function Home() {
  // Highlight Luma, Arcados bot, and Sira projects
  const featuredProjects = [
    {
      name: "Luma AI Knowledge Engine",
      date: "May 2025",
      skills: "TypeScript, LangChain, Ollama, Xenova, RAG",
      summary: "Engineered Obsidian-native RAG pipeline with LangChain/Ollama for semantic note search, achieving 95% accuracy via bidirectional clustering and sub-second queries on unstructured Markdown. Implemented local Xenova Transformers for vector embeddings and cosine similarity analysis, enabling privacy-preserving topic extraction and automatic organization of journal entries and thoughts."
    },
    {
      name: "Arc Decentralized Archive System",
      date: "April 2025",
      skills: "Rust, Distributed Systems, Cryptographic Verification",
      summary: "Developed a decentralized, versioned, cryptographically-verifiable archive system designed to help people, conversations, and institutions preserve data securely across devices. Built with Rust for performance and security, featuring cryptographic verification and decentralized architecture for reliable data preservation."
    },
    {
      name: "Sira Conversational AI Assistant",
      date: "May 2024",
      skills: "TypeScript, Bun, LangChain, OpenAI, Azure, Whisper",
      summary: "Developed a conversational AI assistant featuring real-time token streaming that chunks and sequences LLM responses across multiple provider models, enabling seamless integration between local and remote systems with concurrent audio synthesis. Implemented voice-to-voice pipeline using Whisper.cpp for transcription, Azure/Google TTS from sequenced chunks, and CLI/HTTP interface with auto-routing for scalable deployment."
    }
  ];
  
  return (
        <div className="relative mx-auto max-w-6xl font-montserrat py-12 px-6 md:px-8">
      {/* Hero Section */}
      <section className="text-center mb-20 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          <TextGenerateEffect
            className={title({ size: "lg", color: "foreground" })}
            words="Full-stack developer specializing in AI-driven automation and intelligent systems."
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed font-normal mt-8"
          >
            TypeScript, React.js, Next.js, LangChain, RAG pipelines, OpenAI. Building scalable applications that solve complex business problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex gap-6 justify-center"
          >
            <Link
              href="/projects"
              className="group relative px-10 py-3.5 bg-gradient-to-r from-button-primary-500 to-button-primary-700 dark:from-button-primary-dark-500 dark:to-button-primary-dark-700 text-white rounded-xl font-medium transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-[1.02] backdrop-blur-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 opacity-90" fill="currentColor" viewBox="0 0 20 20" aria-label="Projects icon">
                  <title>Projects icon</title>
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-button-primary-600 to-button-primary-800 dark:from-button-primary-dark-600 dark:to-button-primary-dark-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl backdrop-blur-sm"></div>
            </Link>
            <Link
              href="/about"
              className="group relative px-10 py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl font-medium transition-all duration-500 shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-white/70 dark:hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20" aria-label="Info icon">
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
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 max-w-5xl mx-auto">
        {[
          { number: "4+", label: "AI Systems" },
          { number: "95%", label: "Accuracy" },
          { number: "200+", label: "Users" },
          { number: "6+", label: "Languages" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02, y: -1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-content1/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-102 hover:bg-content1/80"
          >
            <div className="text-[2.5rem] font-bold text-foreground mb-2 tracking-tight">{stat.number}</div>
            <div className="text-[0.9rem] text-default-600 font-light tracking-[0.05em] uppercase">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Project Showcase */}
      <section className="mb-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[1.75rem] font-medium text-foreground mb-6 tracking-tight">
            Recent Work
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-default-600 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              whileHover={{ scale: 1.015, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-content1/60 backdrop-blur-lg rounded-2xl p-6 md:p-8 transition-all duration-700 shadow-lg hover:shadow-xl hover:scale-[1.015] hover:bg-content1/80 h-fit"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[1.1rem] font-semibold text-foreground leading-[1.2] tracking-tight flex-1 pr-3">{project.name}</h3>
                <span className="text-[0.75rem] text-default-600 dark:text-default-300 bg-default-100/60 dark:bg-default-200/20 rounded-xl px-3 py-1.5 backdrop-blur-sm font-medium whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.split(", ").slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-default-100 text-default-700 text-[0.75rem] rounded-lg font-medium whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="text-default-600 dark:text-default-400 text-[0.9rem] leading-[1.7] font-normal">
                {project.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Bubble Cloud */}
      <section className="text-center pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <h2 className="text-[1.75rem] font-medium text-foreground mb-6 tracking-tight">
            Technologies
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-default-600 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
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