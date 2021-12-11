import React from 'react';
import Image from 'next/image';

const Card = (props) => {
	return (
		<div className='service-card'>
			<Image
				alt='alt-text'
				src={`/${props.image}`}
				height='138px'
				width='94px'
			/>
			<h5 className='service-card-heading'>{props.title}</h5>
			<p className='service-card-text'>{props.description}</p>
		</div>
	);
};

export default Card;
