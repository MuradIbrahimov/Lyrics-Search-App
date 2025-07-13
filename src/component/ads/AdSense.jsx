import React, { useEffect } from 'react';

const AdSense = ({ 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '',
  responsive = true 
}) => {
  useEffect(() => {
    // Push the ad to Google AdSense
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log('AdSense error:', error);
    }
  }, []);

  const getAdStyle = () => {
    const baseStyle = {
      display: 'block',
      textAlign: 'center',
      margin: '20px 0',
      ...style
    };

    if (responsive) {
      baseStyle.overflow = 'hidden';
    }

    return baseStyle;
  };

  return (
    <div className={`ad-container ${className}`} style={getAdStyle()}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdSense; 