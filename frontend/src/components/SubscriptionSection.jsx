import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCheck, FaStar, FaCrown } from 'react-icons/fa'

const SubscriptionContainer = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: #cbd5e1;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 3rem;
`

const PlanCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &.popular {
    border-color: rgba(168, 85, 247, 0.5);
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
    transform: scale(1.05);
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
  }
  
  &.popular:hover {
    transform: scale(1.05) translateY(-5px);
  }
`

const PopularBadge = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`

const PlanTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin: 2rem 0 1rem;
`

const PlanPrice = styled.div`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`

const PlanInterval = styled.span`
  font-size: 1rem;
  color: #94a3b8;
  font-weight: 400;
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  color: #cbd5e1;
  font-size: 1rem;
`

const CheckIcon = styled.div`
  color: #10b981;
  font-size: 1rem;
  min-width: 20px;
`

const SubscribeButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
  border: none;
  padding: 16px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid rgba(168, 85, 247, 0.5);
    color: #a855f7;
    
    &:hover {
      background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
      color: white;
    }
  }
`

const plans = [
  {
    title: "Essential",
    price: "$12.99",
    interval: "/month",
    features: [
      "Weekly premium content updates",
      "High-quality text narratives",
      "Basic audio narration",
      "Multi-device synchronization",
      "Priority customer support"
    ],
    buttonText: "Start Essential",
    buttonClass: "secondary"
  },
  {
    title: "Professional",
    price: "$24.99",
    interval: "/month",
    popular: true,
    features: [
      "Daily premium content updates",
      "Full multimodal access (Text/Audio/Video)",
      "Ad-free premium experience",
      "VIP customer support",
      "Exclusive behind-the-scenes content",
      "Early access to new features",
      "Advanced personalization"
    ],
    buttonText: "Upgrade to Pro",
    buttonClass: "primary"
  },
  {
    title: "Enterprise",
    price: "$249.99",
    interval: "/year",
    features: [
      "All Professional features included",
      "Save 25% with annual billing",
      "Exclusive NFT collectibles",
      "Private community access",
      "AI-powered recommendations",
      "Offline content downloads",
      "Custom narrative preferences"
    ],
    buttonText: "Go Enterprise",
    buttonClass: "secondary"
  }
]

const SubscriptionSection = () => {
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
    <SubscriptionContainer>
      <ContentWrapper>
        <SectionTitle {...fadeInUp}>
          Choose Your Premium Plan
        </SectionTitle>
        <SectionSubtitle 
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unlock the full potential of NovelVerse with immersive multimodal storytelling experiences
        </SectionSubtitle>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <PlansContainer>
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                variants={fadeInUp}
                className={plan.popular ? 'popular' : ''}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
              >
                {plan.popular && (
                  <PopularBadge>
                    <FaCrown />
                    Most Popular
                  </PopularBadge>
                )}
                
                <PlanTitle>{plan.title}</PlanTitle>
                <PlanPrice>
                  {plan.price}
                  <PlanInterval>{plan.interval}</PlanInterval>
                </PlanPrice>
                
                <FeaturesList>
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckIcon>
                        <FaCheck />
                      </CheckIcon>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
                
                <SubscribeButton
                  className={plan.buttonClass}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </SubscribeButton>
              </PlanCard>
            ))}
          </PlansContainer>
        </motion.div>
      </ContentWrapper>
    </SubscriptionContainer>
  )
}

export default SubscriptionSection 