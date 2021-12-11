import React from 'react';
import Hero from '../../components/Home/Hero';
import StartForm from '../../components/StartNow/StartForm';
import Footer from '../../components/partials/Footer';
import Header from '../../components/partials/Header';
const startnow = () => {
	return (
		<>
			<Header />
			<Hero
				heroTitle="Let's get you in shape!"
				heroText='You are about to get the best meal & workout plan of your life!'
				heroImg='/hero.svg'
				noButton='true'
			/>
			<StartForm /> <br /> <br />
			<br />
			<br />
			<Footer />
		</>
	);
};

export default startnow;
