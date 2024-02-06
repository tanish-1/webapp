export const getIconClass = (weatherType) => {
    // Define icon classes based on weather type
    switch (weatherType) {
        case 'Rain':
            return 'fas fa-cloud-showers-heavy';
        case 'Clouds':
            return 'fas fa-cloud';
        case 'Clear':
            return 'fas fa-sun';
        // Add more cases for other weather types if needed
        default:
            return 'fas fa-cloud';
    }
};