import React from 'react';
import Image from 'next/image';
const Hero = () => {
	return (
		<div className='supplements-hero'>
			<div className='hero-left'>
				<h2 className='supplements-hero-heading'>
					Supplementation is an essential part of good nutrition
				</h2>
				<p className='supplements-hero-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
					lacus accumsan aliquet amet porttitor habitant laoreet scelerisque
					massa. Consequat, ut proin feugiat egestas amet, eget. Aliquet nulla
					duis in lobortis molestie gravida.
				</p>
			</div>
			<div className="supplements-hero-img">
				<Image src='/supplement-hero.png' height='319px' width='380px' />
			</div>
		</div>
	);
};

export default Hero;
