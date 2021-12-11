import React from 'react';
import Header from "../../components/partials/Header";
import Footer from "../../components/partials/Footer";
import Summary from "../../components/Workouts/Summary";
import Workout from "../../components/Workouts/Workout";
import { workouts } from "../../api/personalizedWorkouts";
import {useRouter} from "next/router";

const SingleWorkout = () => {
    const router = useRouter();
    const { query } = router;
    const workoutData = workouts.filter((workout) => workout.aboutTheProgram.id === query.slug);
    console.log(workoutData[0]);
    return (
        <>
            <Header />
            <div className="individual-workout-hero">
                <Summary workoutSummary={workoutData[0]?.aboutTheProgram}/>
                <Workout workout={workoutData[0]?.programData}/>
            </div>
            <Footer />
        </>
    );
};

export default SingleWorkout;