import React, { useState, useEffect } from 'react';
import {
	Typography,
	Card,
	CardContent,
	Grid,
	TextField,
	Button,
} from '@material-ui/core';
import ResultData from './ResultData';
import {
	getBMIndex,
	getMacros,
	getDailyCalorieReq,
	getIdealWeight,
	getBfpercentage,
} from '../../api/calculator';
import WorkoutRecommend from './WorkoutRecommend';
import MealPlanRecommend from './MealPlanRecommend';
import SuppsRecommend from './SuppsRecommend';

const StartForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [gender, setGender] = useState('');
	const [activityLevel, setActivityLevel] = useState('');
	const [goal, setGoal] = useState('');
	const [neck, setNeck] = useState('');
	const [waist, setWaist] = useState('');
	const [hip, setHip] = useState('');
	const [BMIIndex, setBMIIndex] = useState({});
	const [macros, setMacros] = useState({});
	const [dailyReq, setdailyReq] = useState({});
	const [idealWeight, setIdealWeight] = useState({});
	const [bfPer, setBfPer] = useState({});
	const [workoutExists, setWorkoutExists] = useState('true');
	/*
        a - age 
        w - weight 
        h - height 
        ge - gender 
        ac - activitylevel
        go - goal
        ne - neck
        wa - waist
        hi - hip
    */

	const handleSubmit = async (a, w, h, ge, ac, go, ne, wa, hi, we) => {
		let variable1 = await getBMIndex(a, w, h);
		setBMIIndex(variable1.data.data);

		let variable2 = await getMacros(a, ge, h, w, ac, go);
		setMacros(variable2.data.data);

		let variable3 = await getDailyCalorieReq(a, ge, h, w, ac);
		setdailyReq(variable3);

		let variable4 = await getIdealWeight(ge, h);
		setIdealWeight(variable4);

		let variable5 = await getBfpercentage(a, ge, w, h, ne, wa, hi);
		setBfPer(variable5);

		setWorkoutExists('true');
	};

	return (
		<div>
			<Card style={{ maxWidth: '750px', margin: '10rem auto' }}>
				<CardContent gutterBottom>
					<Typography variant='h4'>
						We are gonna need some data first
					</Typography>
					<Typography
						gutterBottom
						color='textSecondary'
						variant='body2'
						component='p'
					>
						We guarantee complete confidentiality of this data. It wont be used
						for any marketing purposes but strictly to make you a meal and a
						workout plan.
					</Typography>
					<div>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setFirstName(e.target.value)}
									placeholder='First Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setLastName(e.target.value)}
									placeholder='Last Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setAge(e.target.value)}
									type='number'
									placeholder='Age'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setWeight(e.target.value)}
									type='number'
									placeholder='Weight'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setHeight(e.target.value)}
									type='number'
									placeholder='Height'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setGender(e.target.value)}
									type='text'
									placeholder='Gender'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setActivityLevel(e.target.value)}
									type='number'
									placeholder='Activity Level : 1-5'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									onChange={(e) => setGoal(e.target.value)}
									type='text'
									placeholder='Goal : maintain, mildlose, weightlose, extremelose, mildgain, weightgain, extremegain '
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item sm={6}>
								<TextField
									onChange={(e) => setNeck(e.target.value)}
									type='number'
									placeholder='Neck'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item sm={6}>
								<TextField
									onChange={(e) => setWaist(e.target.value)}
									type='number'
									placeholder='Waist'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									onChange={(e) => setHip(e.target.value)}
									type='number'
									placeholder='Hip'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>

							<Grid xs={12} item>
								<Button
									onClick={() =>
										handleSubmit(
											age,
											weight,
											height,
											gender,
											activityLevel,
											goal,
											neck,
											waist,
											hip,
											workoutExists
										)
									}
									type='submit'
									variant='contained'
									color='primary'
									fullWidth
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</div>
				</CardContent>
			</Card>
			<ResultData
				BMIIndex={BMIIndex}
				macros={macros}
				dailyCalories={dailyReq}
				idealWeight={idealWeight}
				bfPer={bfPer}
				workoutExists={workoutExists}
			/>

			{workoutExists === 'true' ? (
				<>
					<WorkoutRecommend />
					<MealPlanRecommend />
					<SuppsRecommend />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default StartForm;
