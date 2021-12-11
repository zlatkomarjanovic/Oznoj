import React from 'react';

const Summary = (props) => {
	return (
		<div className='workout-summary'>
			<h1 className='summary-title'>Workout Summary</h1>
			<table>
				<tr>
					<th>Workout name:</th>
					<td>{props.workoutSummary?.name}</td>
				</tr>
				<tr>
					<th>Goal:</th>
					<td>{props.workoutSummary?.goal}</td>
				</tr>
				<tr>
					<th>Workout type:</th>
					<td>{props.workoutSummary?.workoutType}</td>
				</tr>
				<tr>
					<th>Training level:</th>
					<td>{props.workoutSummary?.trainingLevel}</td>
				</tr>
				<tr>
					<th>Days per week:</th>
					<td>{props.workoutSummary?.daysperWeek}</td>
				</tr>
				<tr>
					<th>Time per workout:</th>
					<td>{props.workoutSummary?.timePerWorkout}</td>
				</tr>
				<tr>
					<th>Equipment:</th>
					<td>{props.workoutSummary?.equipment}</td>
				</tr>
				<tr>
					<th>Target gender:</th>
					<td>{props.workoutSummary?.targetGender}</td>
				</tr>
				<tr>
					<th>Recommended Supplements:</th>
					{props.workoutSummary?.recommendedSupps.map((supp, index) => (
						<tr key={index}>{supp}</tr>
					))}
				</tr>
			</table>
		</div>
	);
};

export default Summary;
