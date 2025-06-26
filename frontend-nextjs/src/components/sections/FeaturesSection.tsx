"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "📚",
    title: "Chinese Novel Adaptation",
    description:
      "Transform cultivation novels into compelling English narratives with culturally-aware AI that understands Eastern storytelling traditions and Western audience preferences.",
    highlight: "Cultural Bridge",
  },
  {
    icon: "🎬",
    title: "Cinema-Quality Video",
    description:
      "Generate movie-level visual content with AI-powered cinematography, featuring dynamic camera work, professional lighting, and stunning visual effects.",
    highlight: "Hollywood-Grade",
  },
  {
    icon: "🎨",
    title: "AI-Generated Illustrations",
    description:
      "Create breathtaking artwork and character designs that bring your stories to life with consistent visual style and incredible detail.",
    highlight: "Artistic Excellence",
  },
  {
    icon: "🎵",
    title: "Immersive Audio",
    description:
      "Professional voice acting, dynamic soundscapes, and adaptive music that responds to narrative tension and emotional beats.",
    highlight: "Audio Theater",
  },
  {
    icon: "🎮",
    title: "Interactive Storytelling",
    description:
      "Reader-driven narratives with branching storylines, character customization, and choices that impact the story's direction.",
    highlight: "Player Agency",
  },
  {
    icon: "🌍",
    title: "Blockchain Collectibles",
    description:
      "Own unique story elements, character assets, and rare scenes as NFTs, creating a new economy around digital storytelling.",
    highlight: "Digital Ownership",
  },
];

const FeaturesSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="section-padding bg-dark-900">
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
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Features
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-dark-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Experience storytelling like never before with our groundbreaking
            combination of AI, blockchain, and immersive technologies
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 
                          border border-cyan-500/20 rounded-2xl p-8 text-center 
                          backdrop-blur-sm relative overflow-hidden transition-all duration-300
                          hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/15"
              >
                {/* Background gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />

                <div
                  className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full 
                              flex items-center justify-center mx-auto mb-6 text-2xl 
                              shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300"
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-dark-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div
                  className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                              text-cyan-400 px-4 py-2 rounded-full text-xs md:text-sm font-semibold 
                              uppercase tracking-wider border border-cyan-500/30"
                >
                  {feature.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
