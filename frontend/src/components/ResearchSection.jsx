import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaLightbulb, FaCogs, FaRocket } from 'react-icons/fa'

const ResearchContainer = styled.section`
  padding: 120px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
`

const ResearchCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 24px;
  padding: 60px 40px;
  max-width: 900px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
    z-index: -1;
  }
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 2rem;
`

const IconWrapper = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
`

const ResearchDescription = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: #cbd5e1;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`

const HighlightText = styled.span`
  color: #06b6d4;
  font-weight: 600;
`

const ResearchSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const iconAnimation = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <ResearchContainer>
      <SectionTitle {...fadeInUp}>
        Research & Innovation
      </SectionTitle>
      
      <ResearchCard 
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <IconsContainer>
          <IconWrapper variants={iconAnimation} animate="animate">
            <FaLightbulb />
          </IconWrapper>
          <IconWrapper 
            variants={iconAnimation} 
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            <FaCogs />
          </IconWrapper>
          <IconWrapper 
            variants={iconAnimation} 
            animate="animate"
            transition={{ delay: 1 }}
          >
            <FaRocket />
          </IconWrapper>
        </IconsContainer>
        
        <ResearchDescription 
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pioneering research in <HighlightText>next-generation multimodal AI systems</HighlightText> and{' '}
          <HighlightText>enterprise-grade AI tooling</HighlightText> for dynamic,{' '}
          <HighlightText>context-aware content creation</HighlightText>. 
          Leading breakthrough innovations in AI-driven storytelling through cutting-edge research 
          and commercial applications at scale.
        </ResearchDescription>
      </ResearchCard>
    </ResearchContainer>
  )
}

export default ResearchSection 