const workouts = [
    {
        name: "Legs & Glutes Blast",
        skillLevel: "Intermediate",
        exerciseType: "Strength Training",
        target: ["Legs", "Glutes"]
    },
    {
        name: "Cardio Kickboxing",
        skillLevel: "Beginner",
        exerciseType: "Cardio",
        target: ["Whole Body"]
    },
    {
        name: "Core Strength Yoga",
        skillLevel: "Intermediate",
        exerciseType: "Yoga",
        target: ["Abs", "Obliques"]
    },
    {
        name: "HIIT Circuit",
        skillLevel: "Advanced",
        exerciseType: "HIIT",
        target: ["Whole Body"]
    },
    {
        name: "Upper Body Sculpt",
        skillLevel: "Intermediate",
        exerciseType: "Strength Training",
        target: ["Arms", "Chest", "Back"]
    },
    {
        name: "Pilates for Flexibility",
        skillLevel: "Beginner",
        exerciseType: "Flexibility",
        target: ["Whole Body"]
    },
    {
        name: "Tabata Sprints",
        skillLevel: "Advanced",
        exerciseType: "Cardio",
        target: ["Legs", "Glutes"]
    },
    {
        name: "Functional Fitness",
        skillLevel: "Intermediate",
        exerciseType: "Functional",
        target: ["Whole Body"]
    },
    {
        name: "Powerlifting Primer",
        skillLevel: "Advanced",
        exerciseType: "Strength Training",
        target: ["Whole Body"]
    },
    {
        name: "Plyometric Power",
        skillLevel: "Advanced",
        exerciseType: "Plyometrics",
        target: ["Whole Body"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workoutForm');
    const skillLevelSelect = document.getElementById('skillLevel');
    const exerciseTypeSelect = document.getElementById('exerciseType');
    const targetSelect = document.getElementById('target');
    const workoutList = document.getElementById('workoutList');

    workoutForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        const skillLevelFilter = skillLevelSelect.value;
        const exerciseTypeFilter = exerciseTypeSelect.value;
        const targetFilter = targetSelect.value;

        const filteredWorkouts = filterWorkouts(workouts, skillLevelFilter, exerciseTypeFilter, targetFilter);
        displayWorkouts(filteredWorkouts);
    });

    function filterWorkouts(workouts, skillLevel, exerciseType, target) {
        return workouts.filter(workout => {
            if (skillLevel !== 'All' && workout.skillLevel !== skillLevel) {
                return false;
            }
            if (exerciseType !== 'All' && workout.exerciseType !== exerciseType) {
                return false;
            }
            if (target !== 'All' && !workout.target.includes(target)) {
                return false;
            }
            return true;
        });
    }

    // Function to display filtered workouts
    function displayWorkouts(workouts) {
        workoutList.innerHTML = '';
        workouts.forEach(workout => {
            const workoutItem = document.createElement('div');
            workoutItem.classList.add('workout-item');
            workoutItem.innerHTML = `
                <h3>${workout.name}</h3>
                <p><span class="bold">Skill Level:</span> ${workout.skillLevel}</p>
                <p><span class="bold">Exercise Type:</span> ${workout.exerciseType}</p>
                <p><span class="bold">Target:</span> ${workout.target.join(', ')}</p>
            `;
            workoutList.appendChild(workoutItem);
        });
    }

    // Initial display of all workouts
    displayWorkouts(workouts);
});
