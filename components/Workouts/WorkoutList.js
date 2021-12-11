import React from 'react';

const WorkoutList = (props) => {
    return (
        <div className="workout-list">
            {props.workouts.map((workout) => (
                <div className="workout-card">
                    <div className="workout-information">
                        <p className="workout-info"><strong>Name:</strong> {workout.aboutTheProgram.name}</p>
                        <p className="workout-info"><strong>Goal:</strong> {workout.aboutTheProgram.goal}</p>
                        <p className="workout-info"><strong>Duration:</strong> {workout.aboutTheProgram.programDuration}</p>
                        <p className="workout-info"><strong>Gender:</strong> {workout.aboutTheProgram.targetGender}</p>
                    </div>
                    <a className="workout-more-information" href={`workouts/${workout.aboutTheProgram.id}`}>View More</a>
                </div>
            ))}
        </div>
    );
};

export default WorkoutList;