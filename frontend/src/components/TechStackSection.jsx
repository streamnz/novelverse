import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TechStackContainer = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4rem;
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 3rem;
`

const TechCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
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
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(168, 85, 247, 0.3);
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`

const TechTag = styled.span`
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%);
  color: #e2e8f0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(168, 85, 247, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%);
    transform: scale(1.05);
  }
`

const techCategories = [
  {
    title: "Large Language Models",
    technologies: ["DeepSeek V3", "LLaMA 3.1", "Qwen 2.5", "GPT-4 Turbo", "Claude 3.5 Sonnet"]
  },
  {
    title: "Audio & Voice",
    technologies: ["CosyVoice", "Bark TTS", "ElevenLabs API"]
  },
  {
    title: "Vision & Video",
    technologies: ["Volcengine Seedance", "Adobe Firefly", "DALL·E 3", "Midjourney V6"]
  },
  {
    title: "Infrastructure & Tooling",
    technologies: ["LangChain", "LangGraph", "FastAPI", "FAISS Vector DB", "ChromaDB", "Playwright", "MetaMask SDK"]
  }
]

const TechStackSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <TechStackContainer>
      <ContentWrapper>
        <SectionTitle {...fadeInUp}>
          Technology Stack
        </SectionTitle>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <TechGrid>
            {techCategories.map((category, index) => (
              <TechCategory
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <CategoryTitle>{category.title}</CategoryTitle>
                <TechList>
                  {category.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechList>
              </TechCategory>
            ))}
          </TechGrid>
        </motion.div>
      </ContentWrapper>
    </TechStackContainer>
  )
}

export default TechStackSection 