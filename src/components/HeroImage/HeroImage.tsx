import React from 'react'
import './HeroImage.scss'
import '../Heading'
import Heading from '../Heading'

interface HeroImageProps {
	imageUrl: string
	altText: string
	headingTitle: string
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText, headingTitle }) => {
	return (
		<>
			<div className='hero-container'>
				<div className='hero-image'>
					<img src={imageUrl} alt={altText} />
					<div className='hero-text'>
            <Heading title={headingTitle} />
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroImage
