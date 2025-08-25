import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useScroll, useTransform, useSpring, useCycle, useMotionValue, useInView } from 'framer-motion';

const brandColors = {
  blue: '#125EAD',
  green: '#4BB74E',
  darkBlue: '#0D3F7A',
  darkGreen: '#3A9B3E',
  lightBlue: '#E6F2FF',
  lightGreen: '#E8F5E9'
};

// Custom hook for Motion One (since we can't import it directly)
const useMotionOne = () => {
  const animate = (element, keyframes, options = {}) => {
    if (!element) return;
    
    const {
      duration = 1,
      easing = 'ease',
      delay = 0,
      repeat = 0,
      direction = 'normal'
    } = options;

    element.animate(keyframes, {
      duration: duration * 1000,
      easing,
      delay: delay * 1000,
      iterations: repeat === Infinity ? repeat : repeat + 1,
      direction,
      fill: 'forwards'
    });
  };

  return { animate };
};

const FramerMotionShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const controls = useAnimation();
  const [animation, cycleAnimation] = useCycle(
    { rotate: 0, scale: 1 },
    { rotate: 180, scale: 1.2 },
    { rotate: 360, scale: 1 }
  );
  
  const containerRef = useRef(null);
  const motionOneRef = useRef(null);
  const scrollRef = useRef(null);
  const inViewRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  
  const springConfig = { type: "spring", stiffness: 300, damping: 30 };
  const x = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  
  const isInView = useInView(inViewRef, { once: true, margin: "-100px" });
  
  const { animate: motionOneAnimate } = useMotionOne();

  useEffect(() => {
    // Motion One example
    if (motionOneRef.current) {
      motionOneAnimate(motionOneRef.current, [
        { transform: 'translateX(0px) rotate(0deg)', background: brandColors.blue },
        { transform: 'translateX(100px) rotate(180deg)', background: brandColors.green },
        { transform: 'translateX(0px) rotate(360deg)', background: brandColors.blue }
      ], {
        duration: 3,
        easing: 'ease-in-out',
        repeat: Infinity,
        direction: 'normal'
      });
    }
  }, [motionOneAnimate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const handleSequentialAnimation = async () => {
    await controls.start({ x: 100, transition: { duration: 0.5 } });
    await controls.start({ y: -50, transition: { duration: 0.5 } });
    await controls.start({ rotate: 180, transition: { duration: 0.5 } });
    await controls.start({ x: 0, y: 0, rotate: 0, transition: { duration: 0.5 } });
  };

  const slides = [
    { id: 1, color: brandColors.blue, text: "Slide 1" },
    { id: 2, color: brandColors.green, text: "Slide 2" },
    { id: 3, color: brandColors.darkBlue, text: "Slide 3" }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #E6F2FF 100%)',
      minHeight: '200vh',
      padding: '40px 20px'
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          background: `linear-gradient(45deg, ${brandColors.blue}, ${brandColors.green})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px'
        }}>
          Framer Motion & Motion One
        </h1>
        <p style={{ color: '#5a6c7d', fontSize: '1.2rem' }}>
          Essential animation methods for modern React applications
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>

        {/* 1. Basic Animation */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>1. Basic Animation</h3>
          <p style={descStyle}>Simple property animations with easing</p>
          <motion.div
            animate={{
              x: [0, 100, 0],
              backgroundColor: [brandColors.blue, brandColors.green, brandColors.blue]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
            style={demoBoxStyle}
          >
            Basic Motion
          </motion.div>
          <code style={codeStyle}>
            {`animate={{
  x: [0, 100, 0],
  backgroundColor: ['#125EAD', '#4BB74E']
}}
transition={{ duration: 2, repeat: Infinity }}`}
          </code>
        </motion.div>

        {/* 2. Gestures & Interactions */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>2. Gestures & Interactions</h3>
          <p style={descStyle}>Hover, tap, and drag interactions</p>
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              boxShadow: `0 10px 30px ${brandColors.blue}40` 
            }}
            whileTap={{ scale: 0.95 }}
            drag="x"
            dragConstraints={{ left: 0, right: 100 }}
            style={{
              ...demoBoxStyle,
              cursor: 'grab'
            }}
          >
            Drag Me Horizontally
          </motion.div>
          <code style={codeStyle}>
            {`whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
drag="x"
dragConstraints={{ left: 0, right: 100 }}`}
          </code>
        </motion.div>

        {/* 3. Variants & Orchestration */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>3. Variants & Orchestration</h3>
          <p style={descStyle}>Coordinated animations across multiple elements</p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {[1, 2, 3].map(num => (
              <motion.div
                key={num}
                variants={itemVariants}
                style={{
                  ...demoBoxStyle,
                  height: '40px',
                  background: num === 1 ? brandColors.blue : 
                            num === 2 ? brandColors.green : brandColors.darkBlue
                }}
              >
                Item {num}
              </motion.div>
            ))}
          </motion.div>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            style={buttonStyle}
          >
            Toggle Stagger
          </button>
        </motion.div>

        {/* 4. AnimatePresence */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>4. AnimatePresence</h3>
          <p style={descStyle}>Enter and exit animations</p>
          <div style={{ height: '120px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => 
                currentSlide === index && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      ...demoBoxStyle,
                      background: slide.color,
                      position: 'absolute',
                      width: '100%'
                    }}
                  >
                    {slide.text}
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            style={buttonStyle}
          >
            Next Slide
          </button>
        </motion.div>

        {/* 5. useAnimation Hook */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>5. useAnimation Hook</h3>
          <p style={descStyle}>Imperative animation control</p>
          <motion.div
            animate={controls}
            style={{
              ...demoBoxStyle,
              background: brandColors.green
            }}
          >
            Sequential Animation
          </motion.div>
          <button onClick={handleSequentialAnimation} style={buttonStyle}>
            Start Sequence
          </button>
          <code style={codeStyle}>
            {`const controls = useAnimation();
await controls.start({ x: 100 });
await controls.start({ y: -50 });
await controls.start({ rotate: 180 });`}
          </code>
        </motion.div>

        {/* 6. useCycle Hook */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>6. useCycle Hook</h3>
          <p style={descStyle}>Cycle through animation states</p>
          <motion.div
            animate={animation}
            transition={{ duration: 0.5 }}
            style={{
              ...demoBoxStyle,
              background: brandColors.darkBlue
            }}
          >
            Cycle Animation
          </motion.div>
          <button onClick={() => cycleAnimation()} style={buttonStyle}>
            Cycle State
          </button>
          <code style={codeStyle}>
            {`const [animation, cycle] = useCycle(
  { rotate: 0, scale: 1 },
  { rotate: 180, scale: 1.2 },
  { rotate: 360, scale: 1 }
);`}
          </code>
        </motion.div>

        {/* 7. Scroll-based Animations */}
        <motion.div style={cardStyle} ref={scrollRef}>
          <h3 style={titleStyle}>7. Scroll-based Animations</h3>
          <p style={descStyle}>Animations driven by scroll position</p>
          <motion.div
            style={{
              ...demoBoxStyle,
              background: brandColors.blue,
              y,
              opacity
            }}
          >
            Scroll to see effect
          </motion.div>
          <code style={codeStyle}>
            {`const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, -100]);
const opacity = useTransform(scrollY, [0, 500], [1, 0]);`}
          </code>
        </motion.div>

        {/* 8. Spring Physics */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>8. Spring Physics</h3>
          <p style={descStyle}>Physics-based spring animations</p>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 200 }}
            style={{
              ...demoBoxStyle,
              background: brandColors.green,
              x: springX,
              cursor: 'grab'
            }}
          >
            Spring Drag
          </motion.div>
          <code style={codeStyle}>
            {`const x = useMotionValue(0);
const springX = useSpring(x, { 
  stiffness: 300, damping: 30 
});`}
          </code>
        </motion.div>

        {/* 9. InView Animations */}
        <motion.div style={cardStyle} ref={inViewRef}>
          <h3 style={titleStyle}>9. InView Animations</h3>
          <p style={descStyle}>Trigger animations when element comes into view</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              ...demoBoxStyle,
              background: brandColors.darkGreen
            }}
          >
            {isInView ? 'In View!' : 'Scroll to view'}
          </motion.div>
          <code style={codeStyle}>
            {`const isInView = useInView(ref, { 
  once: true, margin: "-100px" 
});`}
          </code>
        </motion.div>

        {/* 10. Motion One Example */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>10. Motion One (Web Animations API)</h3>
          <p style={descStyle}>Lightweight alternative using native browser APIs</p>
          <div
            ref={motionOneRef}
            style={{
              ...demoBoxStyle,
              background: brandColors.blue
            }}
          >
            Motion One Animation
          </div>
          <code style={codeStyle}>
            {`animate(element, [
  { transform: 'translateX(0px)', background: '#125EAD' },
  { transform: 'translateX(100px)', background: '#4BB74E' }
], { duration: 2, repeat: Infinity })`}
          </code>
        </motion.div>

        {/* 11. Layout Animations */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>11. Layout Animations</h3>
          <p style={descStyle}>Automatic layout transition animations</p>
          <motion.div layout style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[1, 2, 3, 4].map(num => (
              <motion.div
                key={num}
                layout
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '60px',
                  height: '60px',
                  background: num % 2 === 0 ? brandColors.blue : brandColors.green,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {num}
              </motion.div>
            ))}
          </motion.div>
          <code style={codeStyle}>
            {`<motion.div layout whileHover={{ scale: 1.1 }}>
  Content
</motion.div>`}
          </code>
        </motion.div>

        {/* 12. Path Animations */}
        <motion.div style={cardStyle}>
          <h3 style={titleStyle}>12. SVG Path Animations</h3>
          <p style={descStyle}>Animate SVG paths and shapes</p>
          <svg width="200" height="100" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
            <motion.path
              d="M 10 50 Q 100 10 190 50"
              stroke={brandColors.blue}
              strokeWidth="3"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="10"
              cy="50"
              r="5"
              fill={brandColors.green}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 1.5 }}
            />
          </svg>
          <code style={codeStyle}>
            {`<motion.path
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2 }}
/>`}
          </code>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div 
        style={{ 
          textAlign: 'center', 
          marginTop: '80px', 
          padding: '40px',
          background: 'rgba(255,255,255,0.8)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ color: brandColors.blue, marginBottom: '20px' }}>
          Key Benefits
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div>
            <h4 style={{ color: brandColors.green }}>Performance</h4>
            <p style={{ color: '#5a6c7d' }}>Hardware-accelerated animations using transform and opacity</p>
          </div>
          <div>
            <h4 style={{ color: brandColors.green }}>Developer Experience</h4>
            <p style={{ color: '#5a6c7d' }}>Declarative API with powerful animation primitives</p>
          </div>
          <div>
            <h4 style={{ color: brandColors.green }}>Accessibility</h4>
            <p style={{ color: '#5a6c7d' }}>Built-in support for reduced motion preferences</p>
          </div>
          <div>
            <h4 style={{ color: brandColors.green }}>Flexibility</h4>
            <p style={{ color: '#5a6c7d' }}>From simple transitions to complex orchestrated sequences</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Styles
const cardStyle = {
  background: 'rgba(255,255,255,0.9)',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 20px rgba(18, 94, 173, 0.1)',
  border: '1px solid rgba(18, 94, 173, 0.1)',
  backdropFilter: 'blur(10px)'
};

const titleStyle = {
  color: brandColors.blue,
  marginBottom: '8px',
  fontSize: '1.3rem'
};

const descStyle = {
  color: '#5a6c7d',
  marginBottom: '20px',
  fontSize: '0.95rem'
};

const demoBoxStyle = {
  width: '100%',
  height: '80px',
  background: brandColors.blue,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '16px'
};

const buttonStyle = {
  background: `linear-gradient(45deg, ${brandColors.blue}, ${brandColors.green})`,
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginBottom: '16px',
  transition: 'transform 0.2s ease',
  ':hover': {
    transform: 'translateY(-2px)'
  }
};

const codeStyle = {
  background: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '6px',
  padding: '12px',
  fontSize: '0.85rem',
  fontFamily: 'Monaco, Consolas, monospace',
  color: '#495057',
  display: 'block',
  whiteSpace: 'pre-wrap',
  overflow: 'auto'
};

export default FramerMotionShowcase;