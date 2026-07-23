import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { HumanosGallery } from './components/HumanosGallery';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CareerSection } from './components/CareerSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ClosingSection } from './components/ClosingSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { VoiceAgentModal } from './components/VoiceAgentModal';
import { VideoModal } from './components/VideoModal';
import { HumanosLanding } from './components/HumanosLanding';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'humanos'>(() => {
    return window.location.pathname.toLowerCase().includes('humanos') ? 'humanos' : 'home';
  });
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isVoiceAgentModalOpen, setIsVoiceAgentModalOpen] = useState(false);
  const [videoState, setVideoState] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname.toLowerCase().includes('humanos') ? 'humanos' : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: 'home' | 'humanos') => {
    setCurrentRoute(route);
    const newPath = route === 'humanos' ? '/humanos' : '/';
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  const handleOpenVideo = (url: string, title: string) => {
    setVideoState({ isOpen: true, url, title });
  };

  const handleCloseVideo = () => {
    setVideoState({ isOpen: false, url: '', title: '' });
  };

  // If user navigates to dedicated /humanos page
  if (currentRoute === 'humanos') {
    return <HumanosLanding onBackToPortfolio={() => handleNavigate('home')} />;
  }

  return (
    <div className="relative min-h-screen bg-[#000000] text-white font-['Inter'] antialiased selection:bg-[#01C9C7] selection:text-black overflow-x-clip">
      {/* Top Header */}
      <Navbar onNavigate={(route) => handleNavigate(route as any)} />

      {/* Main Narrative Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenVoiceModal={() => setIsVoiceAgentModalOpen(true)} />

        {/* 2. High-Impact Metrics Section */}
        <MetricsSection />

        {/* 3. HUMANOS Shorts Editorial Archive */}
        <HumanosGallery onNavigate={(route) => handleNavigate(route as any)} />

        {/* 4. About Section (Sobre Mí - 20+ Años) */}
        <AboutSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 5. MI LAB — AI Agents & Products Catalog */}
        <ProjectsSection
          onNavigate={(route) => handleNavigate(route as any)}
          onOpenVideo={handleOpenVideo}
        />

        {/* 6. Career & Education Timeline */}
        <CareerSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 7. LO QUE CREO — Manifesto Section */}
        <PhilosophySection />

        {/* 8. Cinematic Closing Section */}
        <ClosingSection onOpenContact={() => {
          const elem = document.getElementById('contact');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 9. Contact & Footer Section */}
        <ContactSection />
      </main>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* Live Voice Agent Chat Modal */}
      <VoiceAgentModal isOpen={isVoiceAgentModalOpen} onClose={() => setIsVoiceAgentModalOpen(false)} />

      {/* YouTube Video Player Modal */}
      <VideoModal
        isOpen={videoState.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoState.url}
        title={videoState.title}
      />
    </div>
  );
};

export default App;
