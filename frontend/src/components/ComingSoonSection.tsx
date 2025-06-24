import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ComingSoonContainer = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
  
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 15px 35px rgba(168, 85, 247, 0.3);
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const LaunchInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LaunchDate = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a855f7;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    flex-direction: column;
    gap: 5px;
  }
`;

const LaunchDescription = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const NewsletterForm = styled(motion.form)`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  max-width: 350px;
  padding: 15px 20px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:focus {
    border-color: #a855f7;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

const SubscribeButton = styled(motion.button)`
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 150px;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Benefits = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Benefit = styled.div`
  color: #cbd5e1;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  span:first-child {
    color: #a855f7;
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ComingSoonSection: React.FC = () => {
  const [email, setEmail] = useState('');
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
      setEmail('');
    }, 1500);
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
    <ComingSoonContainer>
      <ContentWrapper>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SectionIcon
            variants={fadeInUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            🚀
          </SectionIcon>
          
          <SectionTitle variants={fadeInUp}>
            Coming Soon
          </SectionTitle>
          
          <SectionSubtitle variants={fadeInUp}>
            We're crafting an extraordinary storytelling experience that will revolutionize 
            how you consume and interact with narratives. Be the first to explore this new universe.
          </SectionSubtitle>
          
          <LaunchInfo variants={fadeInUp}>
            <LaunchDate>
              <span>📅</span>
              <span>Expected Launch: Q2 2025</span>
            </LaunchDate>
            <LaunchDescription>
              Beta testing begins soon with exclusive early access for subscribers
            </LaunchDescription>
          </LaunchInfo>
          
          {isSubscribed ? (
            <SuccessMessage
              variants={fadeInUp}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              🎉 Thank you for subscribing! You'll be among the first to experience NovelVerse.
            </SuccessMessage>
          ) : (
            <NewsletterForm variants={fadeInUp} onSubmit={handleSubmit}>
              <EmailInput
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscribeButton
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✉️</span>
                {isLoading ? 'Subscribing...' : 'Get Early Access'}
              </SubscribeButton>
            </NewsletterForm>
          )}
          
          <Benefits variants={fadeInUp}>
            <Benefit>
              <span>🔔</span>
              <span>Priority beta access</span>
            </Benefit>
            <Benefit>
              <span>🚀</span>
              <span>Exclusive preview content</span>
            </Benefit>
            <Benefit>
              <span>✉️</span>
              <span>Development updates</span>
            </Benefit>
          </Benefits>
        </motion.div>
      </ContentWrapper>
    </ComingSoonContainer>
  );
};

export default ComingSoonSection; 