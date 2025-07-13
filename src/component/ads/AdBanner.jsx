import React from 'react';
import AdSense from './AdSense';

const AdBanner = ({ adSlot, className = '' }) => {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="auto"
      className={`ad-banner ${className}`}
      style={{
        minHeight: '90px',
        margin: '30px 0',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
};

export default AdBanner; 