import Header from '../components/partials/Header';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Join from '../components/Home/Join';
import Footer from '../components/partials/Footer';
import React from 'react';
import Head from 'next/head';
import BlueCircle from "../components/partials/BlueCircle";

export default function Home() {
	return (
		<>
			<Header />
			<BlueCircle right="-200px" top="-100px"/>
			<Hero
				heroTitle='Make health your priority!'
				heroText="Exercise helps people lose weight and lower the risk of some diseases.
					Exercising regularly lowers a person's risk of developing some
					diseases, including obesity, type 2 diabetes, and high blood pressure.
					Exercise also can help keep your body at a healthy weight. Exercise
					can help a person age well."
				heroImg='/hero.svg'
			/>
			<Services />
			<BlueCircle right="1300px" />
			<Join />
			<Footer />
		</>
	);
}
