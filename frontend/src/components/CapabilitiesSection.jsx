import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaRobot, FaVideo, FaBook, FaHeadphones, FaCoins, FaGlobe } from 'react-icons/fa'

const CapabilitiesContainer = styled.section`
  padding: 120px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4rem;
`

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 3rem;
`

const CapabilityCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(6, 182, 212, 0.4);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
  }
  
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

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
`

const CapabilityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`

const CapabilityDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.6;
`

const capabilities = [
  {
    icon: <FaRobot />,
    title: "AI Pipeline Orchestration",
    description: "Enterprise-grade AI orchestration using DeepSeek, LangGraph, and CosyVoice for seamless multimodal content generation"
  },
  {
    icon: <FaVideo />,
    title: "Cinematic Production",
    description: "Hollywood-quality video generation powered by Volcengine Seedance for immersive visual storytelling experiences"
  },
  {
    icon: <FaBook />,
    title: "Cultural Adaptation Engine",
    description: "Sophisticated cultivation, progression, and narrative arc systems with culturally-aware storytelling algorithms"
  },
  {
    icon: <FaHeadphones />,
    title: "Multimodal Delivery",
    description: "Unified content ecosystem accessible across text, premium audio, and ultra-HD video formats"
  },
  {
    icon: <FaGlobe />,
    title: "Premium Subscription",
    description: "Enterprise-grade episodic content delivery with advanced analytics and personalized recommendation systems"
  },
  {
    icon: <FaCoins />,
    title: "Blockchain Economics",
    description: "Tokenized narrative ownership with NFT collectibles and decentralized interactive storytelling protocols"
  }
]

const CapabilitiesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <CapabilitiesContainer>
      <SectionTitle {...fadeInUp}>
        Core Capabilities
      </SectionTitle>
      
      <motion.div 
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <CapabilitiesGrid>
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <IconWrapper>
                {capability.icon}
              </IconWrapper>
              <CapabilityTitle>{capability.title}</CapabilityTitle>
              <CapabilityDescription>{capability.description}</CapabilityDescription>
            </CapabilityCard>
          ))}
        </CapabilitiesGrid>
      </motion.div>
    </CapabilitiesContainer>
  )
}

export default CapabilitiesSection 