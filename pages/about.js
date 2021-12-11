import React from 'react';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import { aboutData } from '../api/about';
import Person from '../components/About/Person';
const About = () => {
	return (
		<>
			<Header />
			<div className='our-team'>
				{aboutData.map((person, index) => (
					<Person key={index} {...person} />
				))}
			</div>
			<Footer />
		</>
	);
};

export default About;
