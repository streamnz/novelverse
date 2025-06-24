import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.6;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 46, 0.8) 0%,
    rgba(22, 33, 62, 0.8) 50%,
    rgba(15, 52, 96, 0.8) 100%
  );
  z-index: 2;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 900px;
  padding: 0 20px;
  z-index: 3;
  position: relative;
  color: white;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

const ComingSoonBadge = styled(motion.div)`
  display: inline-block;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 16px;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 30%, #06b6d4 70%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border: none;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(168, 85, 247, 0.4);
  }
  
  @media (max-width: 768px) {
    min-width: 200px;
    padding: 12px 30px;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 13px 33px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    min-width: 200px;
    padding: 10px 30px;
  }
`;

const HeroSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <HeroContainer>
      {!videoError && (
        <VideoBackground 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </VideoBackground>
      )}
      <VideoOverlay />
      
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <HeroContent>
          <ComingSoonBadge
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            Coming Soon
          </ComingSoonBadge>
          
          <MainTitle variants={fadeInUp}>
            NovelVerse
          </MainTitle>
          
          <Subtitle variants={fadeInUp}>
            AI-Powered Cinematic Storytelling Universe
          </Subtitle>
          
          <Description variants={fadeInUp}>
            Experience the future of entertainment where Chinese cultivation novels transform into 
            immersive English narratives through cutting-edge AI, featuring cinematic videos, 
            interactive storytelling, and blockchain-powered digital collectibles.
          </Description>
          
          <ButtonGroup variants={fadeInUp}>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
            </CTAButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </motion.div>
    </HeroContainer>
  );
};

export default HeroSection; 