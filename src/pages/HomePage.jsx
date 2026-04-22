import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import FloatingBadge from "../components/FloatingBadge";
import BackgroundGlow from "../components/BackgroundGlow";

const HomePage = () => {
  return (
    <div className="portfolio-shell">
      <BackgroundGlow />

      <aside className="sidebar-area">
        <Sidebar />
      </aside>

      <main className="content-area">
        <HeroSection />
      </main>

      <FloatingBadge />
    </div>
  );
};

export default HomePage;
