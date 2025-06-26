"use client";

import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    icon: "🧠",
    title: "Large Language Models",
    description:
      "Advanced AI models for natural language understanding and generation",
    technologies: [
      "GPT-4 Turbo",
      "Claude 3.5 Sonnet",
      "DeepSeek V3",
      "LLaMA 3.1",
      "Qwen 2.5",
      "Gemini Pro",
    ],
  },
  {
    icon: "🌐",
    title: "RAG & Knowledge Systems",
    description:
      "Retrieval-Augmented Generation for enhanced contextual understanding",
    technologies: [
      "FAISS Vector DB",
      "ChromaDB",
      "Pinecone",
      "LangChain",
      "LangGraph",
      "Semantic Search",
    ],
  },
  {
    icon: "🤖",
    title: "LORA & Fine-tuning",
    description:
      "Low-Rank Adaptation techniques for efficient model customization",
    technologies: [
      "LoRA",
      "QLoRA",
      "AdaLoRA",
      "Parameter-Efficient Fine-tuning",
      "Model Quantization",
      "Custom Adapters",
    ],
  },
  {
    icon: "🎬",
    title: "Multimodal AI Generation",
    description: "Advanced AI for visual content creation and video synthesis",
    technologies: [
      "Stable Diffusion",
      "DALL-E 3",
      "Midjourney",
      "RunwayML",
      "Pika Labs",
      "Stable Video Diffusion",
    ],
  },
  {
    icon: "👤",
    title: "Digital Humans & Avatars",
    description: "AI-powered virtual characters and interactive personalities",
    technologies: [
      "MetaHuman",
      "Digital Human SDK",
      "Voice Cloning",
      "Facial Animation",
      "Real-time Rendering",
      "Motion Capture",
    ],
  },
  {
    icon: "🪙",
    title: "Web3 & Blockchain",
    description:
      "Decentralized technologies for digital ownership and tokenization",
    technologies: [
      "Ethereum",
      "Polygon",
      "IPFS",
      "NFT Standards",
      "Smart Contracts",
      "DeFi Integration",
    ],
  },
];

const TechStackSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-500/3 via-transparent to-cyan-500/3">
      <div className="container-max">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-dark-400 text-center mb-16 max-w-2xl mx-auto"
          >
            Powered by the latest breakthroughs in AI, blockchain, and immersive
            technologies
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white/2 border border-white/10 rounded-2xl p-8 text-center 
                          backdrop-blur-sm relative overflow-hidden transition-all duration-300
                          hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />

                <div
                  className="w-20 h-20 md:w-20 md:h-20 bg-gradient-primary rounded-full 
                              flex items-center justify-center mx-auto mb-6 text-2xl md:text-3xl 
                              shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300"
                >
                  {category.icon}
                </div>

                <h3
                  className="text-xl md:text-2xl font-semibold mb-4 
                             bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  {category.title}
                </h3>

                <p className="text-sm md:text-base text-dark-300 leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-dark-200 
                               px-4 py-2 rounded-full text-xs md:text-sm font-medium 
                               border border-purple-500/30 transition-all duration-300
                               hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-cyan-500/40 
                               hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
