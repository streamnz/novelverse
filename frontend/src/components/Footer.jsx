import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaDiscord, 
  FaEnvelope, 
  FaHeart,
  FaQuestionCircle,
  FaShieldAlt,
  FaFile
} from 'react-icons/fa'

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%);
  border-top: 1px solid rgba(168, 85, 247, 0.2);
  padding: 80px 20px 30px;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: #a855f7;
    transform: translateX(5px);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1rem;
`

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
  }
`

const CompanyInfo = styled.div`
  margin-bottom: 1.5rem;
`

const CompanyDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`

const ContactInfo = styled.div`
  color: #cbd5e1;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Copyright = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
`

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const LegalLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #a855f7;
  }
`

const Newsletter = styled.div`
  margin-top: 1rem;
`

const NewsletterInput = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`

const EmailInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:focus {
    border-color: #a855f7;
    background: rgba(255, 255, 255, 0.08);
  }
`

const SubscribeButton = styled(motion.button)`
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(168, 85, 247, 0.3);
  }
`

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <FooterContainer>
      <FooterContent>
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <FooterGrid>
            <FooterSection variants={fadeInUp}>
              <SectionTitle>NovelVerse</SectionTitle>
              <CompanyInfo>
                <CompanyDescription>
                  Revolutionary AI-powered storytelling platform transforming Chinese webnovel artistry 
                  into captivating English multimodal narratives.
                </CompanyDescription>
                <ContactInfo>
                  <FaEnvelope />
                  hao.streamnz@gmail.com
                </ContactInfo>
              </CompanyInfo>
              <SocialLinks>
                <SocialLink 
                  href="https://twitter.com/novelverse" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter />
                </SocialLink>
                <SocialLink 
                  href="https://github.com/novelverse" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink 
                  href="https://linkedin.com/company/novelverse" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink 
                  href="https://discord.gg/novelverse" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDiscord />
                </SocialLink>
              </SocialLinks>
            </FooterSection>

            <FooterSection variants={fadeInUp}>
              <SectionTitle>Platform</SectionTitle>
              <FooterLink href="#">Story Collections</FooterLink>
              <FooterLink href="#">Audio Narratives</FooterLink>
              <FooterLink href="#">Video Content</FooterLink>
              <FooterLink href="#">NFT Marketplace</FooterLink>
              <FooterLink href="#">Subscription Plans</FooterLink>
            </FooterSection>

            <FooterSection variants={fadeInUp}>
              <SectionTitle>Support</SectionTitle>
              <FooterLink href="#">
                <FaQuestionCircle />
                FAQ
              </FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Community Forum</FooterLink>
              <FooterLink href="#">Technical Support</FooterLink>
            </FooterSection>

            <FooterSection variants={fadeInUp}>
              <SectionTitle>Stay Updated</SectionTitle>
              <CompanyDescription>
                Get the latest story releases, platform updates, and exclusive content 
                delivered directly to your inbox.
              </CompanyDescription>
              <Newsletter>
                <NewsletterInput>
                  <EmailInput 
                    type="email" 
                    placeholder="Enter your email address"
                  />
                  <SubscribeButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </SubscribeButton>
                </NewsletterInput>
              </Newsletter>
            </FooterSection>
          </FooterGrid>
        </motion.div>

        <FooterBottom>
          <Copyright>
            © 2024 NovelVerse.io. Crafted with <FaHeart style={{ color: '#e11d48' }} /> by Hao Cheng
          </Copyright>
          <LegalLinks>
            <LegalLink href="#">
              <FaShieldAlt style={{ marginRight: '5px' }} />
              Privacy Policy
            </LegalLink>
            <LegalLink href="#">
              <FaFile style={{ marginRight: '5px' }} />
              Terms of Service
            </LegalLink>
            <LegalLink href="#">Cookie Policy</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 