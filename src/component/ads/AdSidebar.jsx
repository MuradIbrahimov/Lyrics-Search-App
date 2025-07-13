import React from 'react';
import AdSense from './AdSense';

const AdSidebar = ({ adSlot, className = '' }) => {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="auto"
      className={`ad-sidebar ${className}`}
      style={{
        minHeight: '600px',
        margin: '0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb'
      }}
    />
  );
};

export default AdSidebar; 