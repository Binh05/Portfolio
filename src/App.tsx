import Header from "./components/Layouts/Header";
import HeroSection from "./components/Sections/HeroSection";
import AboutSection from "./components/Sections/AboutSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import CertificationsSection from "./components/Sections/CertificationsSection";
import ContactSection from "./components/Sections/ContactSection";

function App() {
  return (
    <div className="dark">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}

export default App;
