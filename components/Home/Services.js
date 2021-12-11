import React from 'react';
import Image from 'next/image';
import Card from '../partials/Card';
const Services = () => {
	return (
		<div className='services'>
			<div className='services-header'>
				<h3 className='services-heading'>Our services</h3>
				<p className='services-header-text'>
					Why choose us ? We offer you expert-level automated assistance in
					tailoring your supplements, workout and meal plans!
				</p>
			</div>
			<div className='services-cards'>
				<Card
					image='services.svg'
					title='CALORIE CALCULATOR'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                        Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.'
				/>

				<Card
					image='services.svg'
					title='TAILORED MEAL PLANS'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                        Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.'
				/>

				<Card
					image='services.svg'
					title='WORKOUT PLAN'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                        Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.'
				/>
			</div>
		</div>
	);
};

export default Services;
