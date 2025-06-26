"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ComingSoonSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // 模拟API调用
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
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
    <section
      id="early-access"
      className="section-padding bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-24 h-24 md:w-28 md:h-28 bg-gradient-primary rounded-full 
                      flex items-center justify-center mx-auto mb-8 text-3xl md:text-4xl 
                      shadow-xl shadow-purple-500/30 transition-transform duration-300"
          >
            🚀
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-dark-300 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            We're crafting an extraordinary storytelling experience that will
            revolutionize how you consume and interact with narratives. Be the
            first to explore this new universe.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white/3 border border-white/10 rounded-2xl p-8 mb-12 backdrop-blur-sm"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-2 flex items-center justify-center gap-3">
              <span>📅</span>
              <span className="block sm:inline">Expected Launch: Q4 2025</span>
            </h3>
            <p className="text-base md:text-lg text-dark-400">
              Beta testing begins soon with exclusive early access for
              subscribers
            </p>
          </motion.div>

          {isSubscribed ? (
            <motion.div
              variants={fadeInUp}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 
                        text-green-400 p-6 rounded-xl mb-8 font-medium text-lg"
            >
              🎉 Thank you for subscribing! You'll be among the first to
              experience NovelVerse.
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-2xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 w-full sm:max-w-sm px-6 py-4 text-base bg-white/5 border-2 border-white/10 
                          rounded-full text-white placeholder-dark-400 outline-none transition-all duration-300
                          focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/30"
              />
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto px-8 py-4 text-base flex items-center gap-2 
                          justify-center min-w-[180px] transition-all duration-300
                          disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>✉️</span>
                {isLoading ? "Subscribing..." : "Get Early Access"}
              </motion.button>
            </motion.form>
          )}

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8"
          >
            <div className="flex items-center gap-3 text-dark-300 justify-center sm:justify-start">
              <span className="text-purple-400 text-lg flex-shrink-0">🔔</span>
              <span className="text-sm md:text-base">Priority beta access</span>
            </div>
            <div className="flex items-center gap-3 text-dark-300 justify-center">
              <span className="text-purple-400 text-lg flex-shrink-0">🚀</span>
              <span className="text-sm md:text-base">
                Exclusive preview content
              </span>
            </div>
            <div className="flex items-center gap-3 text-dark-300 justify-center sm:justify-end">
              <span className="text-purple-400 text-lg flex-shrink-0">✉️</span>
              <span className="text-sm md:text-base">Development updates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
