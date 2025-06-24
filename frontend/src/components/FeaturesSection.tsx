import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.section`
  padding: 120px 20px;
  background: #0a0a0a;
  
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
  background: linear-gradient(135deg, #ffffff 0%, #06b6d4 100%);
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FeatureCard = styled(motion.div)`
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
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
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
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FeatureIcon = styled.div`
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
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FeatureHighlight = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
  color: #06b6d4;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 3px 10px;
  }
`;

const features = [
  {
    icon: "📚",
    title: "Chinese Novel Adaptation",
    description: "Transform cultivation novels into compelling English narratives with culturally-aware AI that understands Eastern storytelling traditions and Western audience preferences.",
    highlight: "Cultural Bridge"
  },
  {
    icon: "🎬",
    title: "Cinema-Quality Video",
    description: "Generate movie-level visual content with AI-powered cinematography, featuring dynamic camera work, professional lighting, and stunning visual effects.",
    highlight: "Hollywood-Grade"
  },
  {
    icon: "🎨",
    title: "AI-Generated Illustrations",
    description: "Create breathtaking artwork and character designs that bring your stories to life with consistent visual style and incredible detail.",
    highlight: "Artistic Excellence"
  },
  {
    icon: "🎵",
    title: "Immersive Audio",
    description: "Professional voice acting, dynamic soundscapes, and adaptive music that responds to narrative tension and emotional beats.",
    highlight: "Audio Theater"
  },
  {
    icon: "🎮",
    title: "Interactive Storytelling",
    description: "Reader-driven narratives with branching storylines, character customization, and choices that impact the story's direction.",
    highlight: "Player Agency"
  },
  {
    icon: "🌍",
    title: "Blockchain Collectibles",
    description: "Own unique story elements, character assets, and rare scenes as NFTs, creating a new economy around digital storytelling.",
    highlight: "Digital Ownership"
  }
];

const FeaturesSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <FeaturesContainer>
      <ContentWrapper>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SectionTitle variants={fadeInUp}>
            Revolutionary Features
          </SectionTitle>
          
          <SectionSubtitle variants={fadeInUp}>
            Experience storytelling like never before with our groundbreaking combination 
            of AI, blockchain, and immersive technologies
          </SectionSubtitle>
          
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <FeatureHighlight>{feature.highlight}</FeatureHighlight>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </motion.div>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default FeaturesSection; 