// Google AdSense Configuration
export const ADSENSE_CONFIG = {
  // Replace with your actual AdSense publisher ID
  PUBLISHER_ID: 'ca-pub-YOUR_PUBLISHER_ID',
  
  // Ad slot IDs - Replace with your actual ad slot IDs from AdSense
  AD_SLOTS: {
    // Banner ads
    BANNER_TOP: '1234567890',
    BANNER_BOTTOM: '0987654321',
    
    // In-article ads
    IN_ARTICLE: '5555555555',
    
    // Sidebar ads
    SIDEBAR_LEFT: '1111111111',
    SIDEBAR_RIGHT: '2222222222',
    
    // Search results ads
    SEARCH_RESULTS: '3333333333',
  },
  
  // Ad formats
  AD_FORMATS: {
    BANNER: 'auto',
    SIDEBAR: 'auto',
    IN_ARTICLE: 'auto',
    RESPONSIVE: 'auto',
  },
  
  // Ad placement settings
  PLACEMENTS: {
    // Show ads on these pages
    PAGES: {
      HOME: true,
      LYRICS: true,
      SEARCH: true,
    },
    
    // Maximum ads per page
    MAX_ADS_PER_PAGE: 3,
    
    // Minimum spacing between ads (in pixels)
    MIN_SPACING: 200,
  }
};

// Helper function to get ad slot ID
export const getAdSlot = (slotName) => {
  return ADSENSE_CONFIG.AD_SLOTS[slotName] || 'default-slot';
};

// Helper function to check if ads should be shown
export const shouldShowAds = (pageName) => {
  return ADSENSE_CONFIG.PLACEMENTS.PAGES[pageName] || false;
}; 