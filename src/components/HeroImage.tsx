import React from 'react';
import './HeroImage.scss'

interface HeroImageProps {
    imageUrl: string;
    altText: string;
  }
  
  const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {
    return (
      <div className="hero-image">
        <img src={imageUrl} alt={altText} />
      </div>
    );
  };
  
  export default HeroImage;