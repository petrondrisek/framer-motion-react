import React from 'react'
import { GlowCard } from './GlowCard'
import { motion } from 'motion/react'

const GlowCardExample = () => {
  return (
    <motion.div 
        variants={{
            hidden: { y: -100, rotateZ: 15, scale: 1.3 },
            visible: { y: 0, rotateZ: 0, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }} // smooth easing
        style={{ 
            minHeight: '100vh',
            background: '#000000',
            padding: '60px 20px',
            position: 'relative',
            zIndex: 9000,
        }}
    >
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            
            {/* Minimalistický blue */}
            <GlowCard
              background="rgba(24, 24, 24, 0.8)"
              color="white"
              borderColor="rgba(63, 63, 63, 0.47)"
              borderGlowColor="rgba(0, 98, 255, 1)"
              borderGlowIntensity={100}
              glowColor="rgba(0, 41, 107, 0.65)"
              glowSize={300}
              glowBlur={5}
              hoverScale={1.02}
              hoverTranslateY={-4}
              spotlightEnabled
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>
                Minimalist Blue
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Clean design with glowing border where cursor is
              </p>
            </GlowCard>
    
            {/* Cyberpunk cyan */}
            <GlowCard
              background="linear-gradient(135deg, rgba(6, 11, 25, 0.95) 0%, rgba(17, 24, 39, 0.9) 100%)"
              borderColor="rgba(6, 182, 212, 0.3)"
              borderGlowColor="rgba(6, 182, 212, 1)"
              borderGlowIntensity={1.2}
              glowColor="rgba(6, 182, 212, 0.5)"
              glowSize={400}
              glowBlur={5}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
              hoverScale={1.03}
              spotlightEnabled
              spotlightColor="rgba(6, 182, 212, 0.05)"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#06b6d4' }}>
                Cyberpunk Cyan
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Intense border glow with spotlight effect
              </p>
            </GlowCard>
    
            {/* Purple premium */}
            <GlowCard
              background="rgba(24, 24, 37, 0.8)"
              borderColor="rgba(139, 92, 246, 0.25)"
              borderGlowColor="rgba(168, 85, 247, 0.9)"
              glowColor="rgba(139, 92, 246, 0.4)"
              glowSize={380}
              glowBlur={65}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.6)"
              hoverScale={1.04}
              hoverRotate={1}
              fontSize="15px"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#a78bfa' }}>
                Premium Purple
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Custom border glow color with rotation
              </p>
            </GlowCard>
    
            {/* Green matrix */}
            <GlowCard
              background="rgba(5, 20, 10, 0.9)"
              borderColor="rgba(34, 197, 94, 0.2)"
              glowColor="rgba(34, 197, 94, 0.4)"
              glowSize={420}
              glowBlur={75}
              glowIntensity={0.9}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.7)"
              spotlightEnabled
              spotlightColor="rgba(34, 197, 94, 0.04)"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#22c55e' }}>
                Matrix Green
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Intense green with high glow intensity
              </p>
            </GlowCard>
    
            {/* Orange fire */}
            <GlowCard
              background="linear-gradient(135deg, rgba(30, 15, 5, 0.95) 0%, rgba(20, 10, 5, 0.9) 100%)"
              borderColor="rgba(249, 115, 22, 0.25)"
              borderGlowColor="rgba(255, 165, 0, 1)"
              glowColor="rgba(249, 115, 22, 0.45)"
              glowSize={360}
              glowBlur={55}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.6)"
              hoverScale={1.05}
              borderWidth={2}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#fb923c' }}>
                Fire Orange
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Bright orange border glow with thicker border
              </p>
            </GlowCard>
    
            {/* Pink neon */}
            <GlowCard
              background="rgba(25, 15, 25, 0.85)"
              borderColor="rgba(236, 72, 153, 0.3)"
              glowColor="rgba(236, 72, 153, 0.5)"
              glowSize={400}
              glowBlur={80}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
              hoverScale={1.02}
              hoverTranslateY={-6}
              spotlightEnabled
              spotlightColor="rgba(236, 72, 153, 0.06)"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#ec4899' }}>
                Neon Pink
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Vibrant neon with lift effect
              </p>
            </GlowCard>
    
            {/* Větší karta s více contentem */}
            <GlowCard
              background="rgba(17, 24, 39, 0.7)"
              borderColor="rgba(96, 165, 250, 0.25)"
              glowColor="rgba(96, 165, 250, 0.35)"
              glowSize={450}
              glowBlur={90}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
              hoverScale={1.02}
              padding={40}
              fontSize="16px"
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>
                Extended Card
              </h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '16px' }}>
                This card demonstrates larger padding and content area with smooth glow effect.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '8px',
                flexWrap: 'wrap'
              }}>
                <span style={{ 
                  padding: '4px 12px', 
                  background: 'rgba(96, 165, 250, 0.1)',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}>
                  Feature 1
                </span>
                <span style={{ 
                  padding: '4px 12px', 
                  background: 'rgba(96, 165, 250, 0.1)',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}>
                  Feature 2
                </span>
              </div>
            </GlowCard>
    
            {/* Clickable card */}
            <GlowCard
              background="rgba(20, 20, 30, 0.8)"
              borderColor="rgba(168, 85, 247, 0.3)"
              glowColor="rgba(168, 85, 247, 0.4)"
              glowSize={380}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.5)"
              hoverScale={1.06}
              onClick={() => alert('Card clicked!')}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>
                Clickable Card
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
                Click me to trigger an action
              </p>
            </GlowCard>
    
          </div>
        </motion.div>
    
  )
}

export default GlowCardExample