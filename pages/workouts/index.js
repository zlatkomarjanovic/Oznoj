import React from 'react';
import Head from 'next/head';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Hero from '../../components/Home/Hero';
import WorkoutList from '../../components/Workouts/WorkoutList';
import {workouts} from "../../api/personalizedWorkouts";

const Index = () => {
	return (
		<>
			<Head>
				<title>Sweat - Workout Plans</title>
			</Head>
			<Header />
			<Hero
				heroTitle='Check out some of our completely customizable workout plans!'
				heroText=''
				heroImg='/hero.svg'
			/>
			<WorkoutList workouts={workouts}/>
			<Footer />
		</>
	);
};

export default Index;
