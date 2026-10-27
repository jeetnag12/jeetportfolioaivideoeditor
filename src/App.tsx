import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TimelineRuler } from './components/TimelineRuler';
import { CredibilityStrip } from './components/CredibilityStrip';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FAQSection } from './components/FAQSection';
import { FilmstripTicker } from './components/FilmstripTicker';
import { ContactSection } from './components/ContactSection';
import { type Project, PROJECTS } from './data/portfolioData';
import { ScrollTrigger } from './motion/motionSystem';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for navigation & sync ScrollTrigger
  useEffect(() => {
    const sections = ['hero', 'works', 'about', 'process', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Refresh ScrollTrigger after DOM renders, fonts, and images load
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 150);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 600);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 1200);

    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleOpenShowreel = () => {
    // Open the primary showcase project
    const showreel = PROJECTS[0];
    setSelectedProject(showreel);
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-body selection:bg-red-600 selection:text-white">
      {/* Persistent Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <Hero onOpenShowreel={handleOpenShowreel} />

      {/* Video Editing Timeline Ruler 01 */}
      <TimelineRuler
        label="FEATURED WORKS"
        leftTag="SCENE_01.MP4"
        rightTag="MASTER_EDIT.PRPROJ"
      />

      {/* Credibility & Verified Client Strip */}
      <CredibilityStrip />

      {/* Featured Project Gallery (Poster Reel & EDL Table) */}
      <ProjectGallery onSelectProject={setSelectedProject} />

      {/* Video Editing Timeline Ruler 02 */}
      <TimelineRuler
        label="ABOUT & PHILOSOPHY"
        leftTag="CLUSTERS_02.MOV"
        rightTag="STORY_BOARD.AI"
      />

      {/* About & Philosophy Section */}
      <AboutSection />

      {/* Production Process & Capabilities */}
      <ProcessSection />

      {/* Video Editing Timeline Ruler 03 */}
      <TimelineRuler
        label="EXPERIENCE & TRACK RECORD"
        leftTag="TIMELINE_03.EDL"
        rightTag="CREDITS_FINAL.XML"
      />

      {/* Experience Timeline & Skills Grid */}
      <ExperienceTimeline />

      {/* FAQ Section */}
      <FAQSection />

      {/* Filmstrip Marquee Ticker */}
      <FilmstripTicker />

      {/* Contact Section & Footer */}
      <ContactSection />

      {/* Interactive Project Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
