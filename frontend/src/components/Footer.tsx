import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 60px 20px 40px;
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 40px 15px 30px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  
`;

const Logo = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BrandDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
  }
`;

const FooterSection = styled.div`
  
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(motion.a)`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #a855f7;
  }
`;

const FooterBottom = styled.div`
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #64748b;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
  
  span.heart {
    color: #ef4444;
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const PoweredBy = styled.div`
  color: #64748b;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3px;
  }
`;

const TechBadge = styled.span`
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%);
  color: #a855f7;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterContent>
          <BrandSection>
            <Logo
              whileHover={{ scale: 1.05 }}
            >
              NovelVerse
            </Logo>
            <BrandDescription>
              Revolutionizing storytelling through AI-powered cinematic narratives, 
              transforming Chinese cultivation novels into immersive English experiences.
            </BrandDescription>
            <SocialLinks>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                🐦
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                💬
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                📞
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ⚡
              </SocialLink>
            </SocialLinks>
          </BrandSection>
          
          <FooterSection>
            <SectionTitle>Product</SectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Features
                </FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Technology
                </FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Roadmap
                </FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Beta Access
                </FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Company</SectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  About Us
                </FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Blog
                </FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Careers
                </FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="#" whileHover={{ x: 5 }}>
                  Contact
                </FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            © {currentYear} NovelVerse. Made with <span className="heart">❤️</span> for storytellers worldwide.
          </Copyright>
          <PoweredBy>
            Powered by 
            <TechBadge>AI</TechBadge>
            <TechBadge>Web3</TechBadge>
            <TechBadge>RAG</TechBadge>
          </PoweredBy>
        </FooterBottom>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer; 