import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import FeaturesSection from './components/FeaturesSection';
import ComingSoonSection from './components/ComingSoonSection';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0a0a0a;
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
  position: relative;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <HeroSection />
      <TechStackSection />
      <FeaturesSection />
      <ComingSoonSection />
      <Footer />
    </AppContainer>
  );
};

export default App;
