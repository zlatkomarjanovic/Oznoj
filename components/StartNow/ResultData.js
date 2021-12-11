import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';

const ResultData = ({
	BMIIndex,
	macros,
	dailyCalories,
	idealWeight,
	bfPer,
}) => {
	if (!macros) return 'Loading...';

	const kalorije = dailyCalories?.data?.data?.goals;
	const bodifat = bfPer?.data?.data;

	return (
		<div className='sexy_data'>
			<h2>Your BMI Data</h2>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Your BMI Index is</h3>
					<h1>{BMIIndex.bmi}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Health</h3>
					<h1>{BMIIndex.health}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Healthy BMI Range:</h3>
					<h1>{BMIIndex.healthy_bmi_range}</h1>
				</div>
			</div>
			<h2>Your Macros</h2>
			<h1>Calories: {macros?.calorie?.toFixed(2)}</h1>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Balanced Intake</h3>
					<h4>Protein: {macros?.balanced?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.balanced?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.balanced?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Low Fat</h3>
					<h4>Protein: {macros?.lowfat?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.lowfat?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.lowfat?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Low Carbs:</h3>

					<h4>Protein: {macros?.lowcarbs?.protein.toFixed(2)}g</h4>
					<h4>Fat: {macros?.lowcarbs?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.lowcarbs?.carbs?.toFixed(2)}g</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>High Protein:</h3>

					<h4>Protein: {macros?.highprotein?.protein?.toFixed(2)}g</h4>
					<h4>Fat: {macros?.highprotein?.fat?.toFixed(2)}g</h4>
					<h4>Carbs: {macros?.highprotein?.carbs?.toFixed(2)}g</h4>
				</div>
			</div>
			<h2>Your Daily Calorie Intake</h2>
			<h1>BMR: {dailyCalories?.data?.data?.BMR}</h1>
			<h3>
				Maintain Weight :{' '}
				{dailyCalories?.data?.data?.goals?.['maintain weight']}kcal
			</h3>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Mild Weight Loss</h3>
					<h4>
						Weight Loss: {kalorije?.['Mild weight loss']?.['loss weight']}
					</h4>
					<h4>Calories: {kalorije?.['Mild weight loss']?.['calory']}</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Weight Loss</h3>
					<h4>Weight Loss: {kalorije?.['Weight loss']?.['loss weight']}</h4>
					<h4>Calories: {kalorije?.['Weight loss']?.['calory']}</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Extreme Weight Loss</h3>
					<h4>
						Weight Loss: {kalorije?.['Extreme weight loss']?.['loss weight']}
					</h4>
					<h4>Calories: {kalorije?.['Extreme weight loss']?.['calory']}</h4>
					<h4>Not recommended for most people</h4>
				</div>
			</div>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Mild Weight Gain</h3>
					<h4>
						Weight Gain: {kalorije?.['Mild weight gain']?.['gain weight']}
					</h4>
					<h4>Calories: {kalorije?.['Mild weight gain']?.['calory']}</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Weight gain</h3>
					<h4>Weight gain: {kalorije?.['Weight gain']?.['gain weight']}</h4>
					<h4>Calories: {kalorije?.['Weight gain']?.['calory']}</h4>
				</div>
				<div className='sexy_data_card'>
					<h3>Extreme weight gain</h3>
					<h4>
						Weight gain: {kalorije?.['Extreme weight gain']?.['gain weight']}
					</h4>
					<h4>Calories: {kalorije?.['Extreme weight gain']?.['calory']}</h4>
					<h4>Not recommended for most people</h4>
				</div>
			</div>

			<h2>Body Weight Fat Percentage</h2>
			<div className='sexy_data_cards'>
				<div className='sexy_data_card'>
					<h3>Body Fat (BMI method)</h3>
					<h1>{bodifat?.['Body Fat (BMI method)']}%</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Body Fat (U.S. Navy Method)</h3>
					<h1>{bodifat?.['Body Fat (U.S. Navy Method)']}</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Body Fat Mass</h3>
					<h1>{bodifat?.['Body Fat Mass']} kg</h1>
				</div>
				<div className='sexy_data_card'>
					<h3>Lean Body Mass</h3>
					<h1>{bodifat?.['Lean Body Mass']} kg</h1>
				</div>
			</div>
		</div>
	);
};

export default ResultData;
