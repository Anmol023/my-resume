import { useEffect, useRef, useState } from 'react';
import ScrollSpyNavbar from '../components/ScrollSpyNavbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import { SECTIONS } from '@/constant';
import { CircularProgress, Fab } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Bottom from '@/components/Bottom';

export default function Home() {
  const [activeTab, setActiveTab] = useState(-1)
  const [isScrolled, setIsScrolled] = useState(false)
  const [loading, setLoading] = useState(false)

  const activeTabRef = useRef(activeTab)
  activeTabRef.current = activeTab

useEffect(() => {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        setIsScrolled(scrollY > windowHeight * 0.1);

        // Special case: top of page (reset)
        if (scrollY < 100) {
          if (activeTabRef.current !== -1) setActiveTab(-1);
        } 
        // Special case: bottom of page → force last tab
        else if (scrollY + windowHeight >= documentHeight - 5) {
          if (activeTabRef.current !== SECTIONS.length - 1) {
            setActiveTab(SECTIONS.length - 1);
          }
        } 
        // Normal scroll behavior
        else {
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].toLowerCase());
            if (el && el.offsetTop <= scrollY + 100) {
              if (activeTabRef.current !== i) {
                setActiveTab(i);
              }
              break;
            }
          }
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);

  const navbarStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    top: '0',
    transition: 'bottom 0.3s ease-in-out, top 0.3s ease-in-out',
    background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
  }

  const handleDownload = async () => {
    try {
      setLoading(true)
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = '/api/downloadLink'
        link.setAttribute('download', '')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setTimeout(() => setLoading(false), 3000)
      }, 100)
    } catch (err) {
      alert('Download failed')
      setLoading(false)
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      
        <HeroSection />

        <div style={navbarStyle}>
          <ScrollSpyNavbar
            sections={SECTIONS}
            activeTab={activeTab}
            isSticky={isScrolled}
            onTabClick={(index) => {
              const el = document.getElementById(SECTIONS[index].toLowerCase())
              const el1 = document.getElementById(`header-${SECTIONS[index].toLowerCase()}`)
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                el1.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
              }
            }}
          />
        </div>

      <div id="about"><About /></div>
      <div id="experience" ><Experience  /></div>
      <div id="education"><Education /></div>
      <div id="skills" className="skills"><Skills /></div>
      {/* <div id='bottom'><Bottom/></div> */}
      <Fab
        color="primary"
        size='small'
        aria-label="download"
        onClick={handleDownload}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : <DownloadIcon />}
      </Fab>
      
    </div>
  );
}