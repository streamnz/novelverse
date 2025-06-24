import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechStackContainer = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%);
  
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #94a3b8;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TechCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
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
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const CategoryIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

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
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

const techCategories = [
  {
    icon: "🧠",
    title: "Large Language Models",
    description: "Advanced AI models for natural language understanding and generation",
    technologies: ["GPT-4 Turbo", "Claude 3.5 Sonnet", "DeepSeek V3", "LLaMA 3.1", "Qwen 2.5", "Gemini Pro"]
  },
  {
    icon: "🌐",
    title: "RAG & Knowledge Systems",
    description: "Retrieval-Augmented Generation for enhanced contextual understanding",
    technologies: ["FAISS Vector DB", "ChromaDB", "Pinecone", "LangChain", "LangGraph", "Semantic Search"]
  },
  {
    icon: "🤖",
    title: "LORA & Fine-tuning",
    description: "Low-Rank Adaptation techniques for efficient model customization",
    technologies: ["LoRA", "QLoRA", "AdaLoRA", "Parameter-Efficient Fine-tuning", "Model Quantization", "Custom Adapters"]
  },
  {
    icon: "🎬",
    title: "Multimodal AI Generation",
    description: "Advanced AI for visual content creation and video synthesis",
    technologies: ["Stable Diffusion", "DALL-E 3", "Midjourney", "RunwayML", "Pika Labs", "Stable Video Diffusion"]
  },
  {
    icon: "👤",
    title: "Digital Humans & Avatars",
    description: "AI-powered virtual characters and interactive personalities",
    technologies: ["MetaHuman", "Digital Human SDK", "Voice Cloning", "Facial Animation", "Real-time Rendering", "Motion Capture"]
  },
  {
    icon: "🪙",
    title: "Web3 & Blockchain",
    description: "Decentralized technologies for digital ownership and tokenization",
    technologies: ["Ethereum", "Polygon", "IPFS", "NFT Standards", "Smart Contracts", "DeFi Integration"]
  }
];

const TechStackSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <TechStackContainer>
      <ContentWrapper>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SectionTitle variants={fadeInUp}>
            Cutting-Edge Technology Stack
          </SectionTitle>
          
          <SectionSubtitle variants={fadeInUp}>
            Powered by the latest breakthroughs in AI, blockchain, and immersive technologies
          </SectionSubtitle>
          
          <TechGrid>
            {techCategories.map((category, index) => (
              <TechCategory
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <CategoryIcon>
                  {category.icon}
                </CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
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
  );
};

export default TechStackSection; 