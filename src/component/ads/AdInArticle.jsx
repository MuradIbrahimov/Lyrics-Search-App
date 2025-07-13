import React from 'react';
import AdSense from './AdSense';

const AdInArticle = ({ adSlot, className = '' }) => {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="auto"
      className={`ad-in-article ${className}`}
      style={{
        minHeight: '250px',
        margin: '40px 0',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e9ecef'
      }}
    />
  );
};

export default AdInArticle; 