import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.7;
`

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
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  z-index: 3;
  position: relative;
  color: white;
`

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 30%, #06b6d4 70%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 1.2rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
  }
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBackground 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="metadata"
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* 如果视频无法加载，显示备用背景 */}
      </VideoBackground>
      <VideoOverlay />
      <HeroContent>
        <MainTitle>NovelVerse</MainTitle>
        <Subtitle>AI-Driven Fiction Universe</Subtitle>
        <Description>
          Transforming Chinese Webnovel Tropes into Captivating English Narratives 
          Across Text, Audio, and Video with Cutting-Edge AI Technology
        </Description>
        <CTAButton>Discover the Universe</CTAButton>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection 