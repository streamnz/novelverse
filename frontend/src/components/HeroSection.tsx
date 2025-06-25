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

// 新增的模态框样式组件
const VideoModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.1);
  }
  
  &:before {
    content: '✕';
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
`;

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
    const earlyAccessSection = document.getElementById('early-access');
    if (earlyAccessSection) {
      earlyAccessSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 阻止背景滚动当模态框打开时
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 清理函数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

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
    <>
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
                onClick={handleGetEarlyAccess}
              >
                Get Early Access
              </CTAButton>
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchDemo}
              >
                Watch Demo
              </SecondaryButton>
            </ButtonGroup>
          </HeroContent>
        </motion.div>
      </HeroContainer>

      {/* 视频模态框 */}
      {showVideoModal && (
        <VideoModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleCloseModal}
        >
          <VideoContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              onClick={handleCloseModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="关闭视频"
            />
            <VideoIframe
              src="https://www.youtube.com/embed/0TDII5IkI3Y?autoplay=1&rel=0"
              title="NovelVerse Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        </VideoModal>
      )}
    </>
  );
};

export default HeroSection; 