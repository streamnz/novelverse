"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10 section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-2xl">
                📖
              </div>
              <h3 className="text-2xl font-bold gradient-text">NovelVerse</h3>
            </div>
            <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
              Transforming Chinese cultivation novels into immersive English
              narratives through cutting-edge AI, blockchain technology, and
              cinematic storytelling.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-gradient-primary rounded-full 
                          flex items-center justify-center transition-all duration-300
                          hover:shadow-lg hover:shadow-purple-500/30"
              >
                🐦
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-gradient-primary rounded-full 
                          flex items-center justify-center transition-all duration-300
                          hover:shadow-lg hover:shadow-purple-500/30"
              >
                💬
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-gradient-primary rounded-full 
                          flex items-center justify-center transition-all duration-300
                          hover:shadow-lg hover:shadow-purple-500/30"
              >
                🔗
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-gradient-primary rounded-full 
                          flex items-center justify-center transition-all duration-300
                          hover:shadow-lg hover:shadow-purple-500/30"
              >
                📺
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Features", "Technology", "Roadmap", "Community"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-dark-300 hover:text-purple-400 transition-all duration-300
                              hover:underline underline-offset-4"
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                "Documentation",
                "API Reference",
                "Developer Guide",
                "Support",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-dark-300 hover:text-cyan-400 transition-all duration-300
                              hover:underline underline-offset-4"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row 
                    justify-between items-center gap-4"
        >
          <p className="text-dark-400 text-sm text-center md:text-left">
            © 2025 NovelVerse. All rights reserved. Powered by AI and blockchain
            technology.
          </p>
          <div className="flex gap-6 text-sm text-dark-400">
            <motion.a
              href="#"
              whileHover={{ color: "#a855f7" }}
              className="hover:underline underline-offset-4 transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#a855f7" }}
              className="hover:underline underline-offset-4 transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#a855f7" }}
              className="hover:underline underline-offset-4 transition-colors duration-300"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
