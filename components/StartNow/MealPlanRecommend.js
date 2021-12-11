import React, { useState, useEffect } from 'react';
import Recipes from '../Recipes/Recipes';

const MealPlanRecommend = () => {
	return (
		<div>
			<h2 style={{ fontSize: '3rem', margin: '3rem' }}>
				Some of the healthy foods we recommend
			</h2>
			<Recipes />
		</div>
	);
};

export default MealPlanRecommend;
