import React from 'react';
import Link from 'next/link';

const Button = (props) => {
	return (
		<Link href={`/${props.url ? props.url : ''}`} passHref>
			<button
				className={`${props.filled === 'true' ? 'filled-btn' : 'empty-btn'}`}
			>
				Start Now
			</button>
		</Link>
	);
};

export default Button;
