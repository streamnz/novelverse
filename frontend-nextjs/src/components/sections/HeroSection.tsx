"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-10 w-11 h-11 bg-black/70 border-2 border-white/30 
                         text-white rounded-full flex items-center justify-center text-xl font-bold
                         backdrop-blur-custom transition-all duration-300 
                         hover:bg-white/20 hover:border-white/60 hover:scale-110
                         focus:outline-none focus:ring-2 focus:ring-white/50"
              title="关闭视频"
            >
              ✕
            </motion.button>
            <iframe
              src="https://www.youtube.com/embed/0TDII5IkI3Y?autoplay=1&rel=0"
              title="NovelVerse Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
  };

  const handleGetEarlyAccess = () => {
    scrollToElement("early-access");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Video Background */}
        {!videoError && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-60"
          >
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        )}

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800/80 via-dark-700/80 to-primary-900/80 z-20" />

        {/* Hero Content */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="relative z-30"
        >
          <div className="text-center max-w-4xl px-5 text-white">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="gradient-text">NovelVerse</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 leading-tight"
            >
              AI-Powered Cinematic Storytelling Universe
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-dark-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Experience the future of entertainment where Chinese cultivation
              novels transform into immersive English narratives through
              cutting-edge AI, featuring cinematic videos, interactive
              storytelling, and blockchain-powered digital collectibles.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetEarlyAccess}
                className="btn-primary min-w-[200px] text-lg"
              >
                Get Early Access
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchDemo}
                className="btn-secondary min-w-[200px] text-lg"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={showVideoModal} onClose={handleCloseModal} />
    </>
  );
};

export default HeroSection;
