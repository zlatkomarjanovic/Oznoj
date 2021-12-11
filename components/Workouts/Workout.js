import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions(props) {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className='workout'>
			{props.workout?.map((day, index) => (
				<Accordion
					key={index}
					className='accordion'
					expanded={expanded === 'panel1'}
					onChange={handleChange('panel1')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							{day.day}
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							{day.targetMuscleGroup} - {day.trainingType}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<table className='workout-table'>
								<tr>
									<th>Exercise</th>
									<th>Sets</th>
									<th>Reps</th>
								</tr>
								{day.excersises.map((exercise, index) => (
									<tr key={index}>
										<td>{exercise.excersiseName}</td>
										<td>{exercise.sets}</td>
										<td>{exercise.reps}</td>
									</tr>
								))}
							</table>
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
