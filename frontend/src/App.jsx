import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import TechStackSection from './components/TechStackSection'
import ResearchSection from './components/ResearchSection'
import SubscriptionSection from './components/SubscriptionSection'
import Footer from './components/Footer'
import './App.css'

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0a0a0a;
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
  position: relative;
  
  /* 简化布局设置 */
  display: block;
`

function App() {
  return (
    <AppContainer>
      <HeroSection />
      <CapabilitiesSection />
      <TechStackSection />
      <ResearchSection />
      <SubscriptionSection />
      <Footer />
    </AppContainer>
  )
}

export default App
