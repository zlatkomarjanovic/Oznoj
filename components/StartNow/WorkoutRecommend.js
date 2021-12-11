import { Grid, Typography, Card } from '@material-ui/core';
import React from 'react';
import { workouts } from '../../api/personalizedWorkouts';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '3rem', //grid padding
		backgroundColor: '#E6E6FA',
	},
}));

const WorkoutRecommend = () => {
	const classes = useStyles();
	return (
		<div style={{ width: '90%', margin: '10rem auto' }}>
			<h1>Your workout plan is: </h1>
			<Grid container spacing={2}>
				{workouts.map(({ aboutTheProgram }, index) => (
					<Grid key={index} item xs={12} sm={12}>
						<Card className={classes.paper} gutterBottom>
							<Typography variant='h3'>{aboutTheProgram.name}</Typography>
							<Typography variant='h5'>
								Goal of this program is: {aboutTheProgram.goal}
							</Typography>
							<Typography variant='h6'>
								This is a {aboutTheProgram.workoutType} type workout plan made
								for those on an {aboutTheProgram.trainingLevel} but also can be
								used to make significant progress with beginners. It is going to
								take you {aboutTheProgram.programDuration} to complete this
								program doing it {aboutTheProgram.daysperWeek} days per week,{' '}
								{aboutTheProgram.timePerWorkout} per workout.
							</Typography>
							<Link href='/workouts'>
								<span style={{ fontSize: '30px', cursor: 'pointer' }}>
									Read more
								</span>
							</Link>{' '}
							to get your tailored plan !
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default WorkoutRecommend;
