import { useEffect, useRef, useState } from 'react';
import ScrollSpyNavbar from '../components/ScrollSpyNavbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import { SECTIONS } from '@/constant';

export default function Home() {
  const [activeTab, setActiveTab] = useState(-1)
  const [isScrolled, setIsScrolled] = useState(false)

  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset
          setIsScrolled(scrollY > window.innerHeight * 0.1)

          if(scrollY< 100){
            if (activeTabRef.current !== -1) setActiveTab(-1);
          } else{
              for (let i = SECTIONS.length - 1; i >= 0; i--) {
              const el = document.getElementById(SECTIONS[i])
              if (el && el.offsetTop <= scrollY + 100) {
                if (activeTabRef.current !== i) {
                  setActiveTab(i)
                }
                break
              }
            }
          }
          
          ticking = false
        })
        ticking = true
      }
    };

    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  const navbarStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    top: '0',
    transition: 'bottom 0.3s ease-in-out, top 0.3s ease-in-out',
    background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
  };

  return (
    <div style={{ fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
        <HeroSection />

        <div style={navbarStyle}>
          <ScrollSpyNavbar
            sections={SECTIONS}
            activeTab={activeTab}
            isSticky={isScrolled}
            onTabClick={(index) => {
              const el = document.getElementById(SECTIONS[index])
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          />
        </div>

      <div id="about"><About /></div>
     <div id="experience" ><Experience  /></div>
      <div id="education"><Education /></div>
       <div id="skills" style={{ paddingBottom: '65vh' }}><Skills /></div>
      
    
    </div>
  );
}