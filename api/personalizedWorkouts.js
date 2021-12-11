export const workouts = [
	{
		aboutTheProgram: {
			name: 'PHUL',
			id: '0001',
			goal: 'Build Muscle & Strength',
			workoutType: 'Split',
			trainingLevel: 'Intermediate',
			programDuration: '12 weeks',
			daysperWeek: '4',
			timePerWorkout: '45-60 minutes',
			equipment: 'Barbell, Dumbbells, Machines',
			targetGender: 'Male & Female',
			recommendedSupps: [
				'Whey Protein Powder',
				'Creatine',
				'Beta-Alanine',
				'Citrulline Malate',
				'Pre-workout',
			],
		},
		programData: [
			{
				day: 'Day 1',
				targetMuscleGroup: 'Upper Body',
				trainingType: 'Power',
				description:
					'The PHUL workout is based around the basic principles of strength and size.  This 4 day program will allow you to maximize results on both fronts in an easy adaptable routine built off the following principles: Frequency. Studies have shown muscle protein synthesis (MPS) to be elevated for up to 48 hours after training. That would make it ideal for you to hit each muscle more frequently than a typical once per week split. The PHUL program is designed to hit each muscle group twice within a week. Compounds. The PHUL program focuses on the big compound movements for optimal progression. While isolation movements are included in this program as well, the main goal is to increase performance on the main lifts, as well as pack on pounds of muscle.  Power. This program uses 2 of its 4 working days to focus on pure strength training. The key to getting stronger and bigger is to utilize progressive overload and time under tension. These 2 days will see that you will be able to use more weight on your hypertrophy days. Hypertrophy. In addition to 2 power days, your other 2 days on the PHUL program will focus on hypertrophy (bodybuilding) style training. This way, not only will you be seeing strength increases but you will be building size as well.',
				excersises: [
					{ excersiseName: 'Barbell Bench Press', sets: '3-4', reps: '3-5' },
					{
						excersiseName: 'Incline Dumbell Bench Press', sets: '3-4', reps: '6-10',
					},
					{ excersiseName: 'Bent Over Row', sets: '3-4', reps: '3-5' },
					{ excersiseName: 'Lat Pull Down', sets: '3-4', reps: '6-10' },
					{ excersiseName: 'Overhead Press', sets: '2-3', reps: '5-8' },
					{ excersiseName: 'Barbell Curl', sets: '2-3', reps: '6-10' },
					{ excersiseName: 'Skullcrusher', sets: '2-3', reps: '6-10' },
				],
			},
			{
				day: 'Day 2',
				targetMuscleGroup: 'Lower Body',
				trainingType: 'Power',
				excersises: [
					{ excersiseName: 'Squat', sets: '3-4', reps: '3-5' },
					{
						excersiseName: 'Deadlift',
						sets: '3-4',
						reps: '6-10',
					},
					{ excersiseName: 'Leg Press', sets: '3-5', reps: '10-15' },
					{ excersiseName: 'Leg Curl', sets: '3-4', reps: '6-10' },
					{ excersiseName: 'Calf Excersise', sets: '4', reps: '6-10' },
				],
			},
			{
				day: 'Day 3',
				targetMuscleGroup: 'Upper Body',
				trainingType: 'Hypertrophy',
				excersises: [
					{
						excersiseName: 'Incline Barbell Bench Press',
						sets: '3-4',
						reps: '8-12',
					},
					{
						excersiseName: 'Flat Bench Dumbell Fly',
						sets: '3-4',
						reps: '8-12',
					},
					{ excersiseName: 'Seated Cable Row', sets: '3-4', reps: '8-12' },
					{ excersiseName: 'One Arm Dumbell Row', sets: '3-4', reps: '8-12' },
					{ excersiseName: 'Dumbell Lateral Raise', sets: '3-4', reps: '8-12' },
					{
						excersiseName: 'Seated Incline Dumbell Curl',
						sets: '3-4',
						reps: '8-12',
					},
					{
						excersiseName: 'Cable Tricep Extension',
						sets: '3-4',
						reps: '8-12',
					},
				],
			},
			{
				day: 'Day 4',
				targetMuscleGroup: 'Lower Body',
				trainingType: 'Hypertrophy',
				excersises: [
					{
						excersiseName: 'Front Squat',
						sets: '3-4',
						reps: '8-12',
					},
					{
						excersiseName: 'Barbell Lunge',
						sets: '3-4',
						reps: '8-12',
					},
					{ excersiseName: 'Leg Extension', sets: '3-4', reps: '10-15' },
					{ excersiseName: 'Leg Curl', sets: '3-4', reps: '10-15' },
					{ excersiseName: 'Seated Calf Raise', sets: '3-4', reps: '8-12' },
					{
						excersiseName: 'Calf Press',
						sets: '3-4',
						reps: '8-12',
					},
				],
			},
		],
	},
];
