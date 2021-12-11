import React from 'react';
import Image from 'next/image';
import Bullet from '../partials/Bullet';

const Join = () => {
	return (
		<div className='join'>
			<div className='join-img'>
				<Image alt='alt text' src='/join.svg' height='856px' width='508px' />
			</div>
			<div className='join-right'>
				<h2 className='join-heading'>The reason you should join us</h2>
				<ul className='join-bullets'>
					<li className='join-bullet'>
						<Bullet number='1' />
						<p className='bullet-text'>Lorem ipsum dolor sit amet.</p>
					</li>
					<li className='join-bullet'>
						<Bullet number='2' />
						<p className='bullet-text'>Lorem ipsum dolor sit amet.</p>
					</li>
					<li className='join-bullet'>
						<Bullet number='3' />
						<p className='bullet-text'>Lorem ipsum dolor sit amet.</p>
					</li>
					<li className='join-bullet'>
						<Bullet number='4' />
						<p className='bullet-text'>Lorem ipsum dolor sit amet.</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Join;
