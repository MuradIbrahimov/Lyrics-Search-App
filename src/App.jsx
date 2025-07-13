import Navbar from "./component/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Index from "./component/layout/Index";
import Lyrics from "./component/tracks/Lyrics";
import AdSidebar from "./component/ads/AdSidebar";
import { getAdSlot, shouldShowAds } from "./config/adsense";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        {/* Left Sidebar */}
        <div className="sidebar-left">
          {shouldShowAds('HOME') && (
            <AdSidebar adSlot={getAdSlot('SIDEBAR_LEFT')} />
          )}
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lyrics/track/:id" element={<Lyrics />} />
            </Routes>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="sidebar-right">
          {shouldShowAds('HOME') && (
            <AdSidebar adSlot={getAdSlot('SIDEBAR_RIGHT')} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
