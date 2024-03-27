const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');
const cron = require('node-cron');
const uuid = require('uuid');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

dotenv.config();
app.use(express.json());

const resultRouter = require('./routes/results');
app.use("/api",resultRouter);


// Define the cron job
cron.schedule('5 12 * * *', async () => {
    console.log('Aggregator service running...');

    try {
        // Fetch user data from the user service
        const response = await axios.get('http://localhost:5000/api/user');
        const userData = response.data.data;

        // Aggregate data including session time metrics
        const aggregatedResults = aggregateData(userData);
        console.log('Data aggregated successfully:', aggregatedResults);

        // Fetch book data from the endpoint
        const response2 = await axios.get('http://localhost:5001/api/book');
        const bookData = response2.data.data;

        // Calculate average ratings for each author
        const averageRatingsByAuthor = calculateAverageRatings(bookData);
        console.log("Average ratings for each author:");
        console.log(averageRatingsByAuthor);

        // Generate a unique result ID
        const resultId = uuid.v4();

        // Construct the result object
        const resultObject = {
            resultId: resultId,
            averageSessionDuration: aggregatedResults, 
            averageRating: averageRatingsByAuthor 
        };

        // Call the create result API
        const createResponse = await axios.post('http://localhost:5005/api/result', resultObject);
        console.log('Result created successfully:', createResponse.data);

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
});

// Function to calculate average session duration
function aggregateData(userData) {
    const dayReadingMap = {}; // Object to store reading durations for each day
    const daySessionCount = {}; // Object to store session counts for each day

    // Iterate over each user
    userData.forEach(user => {
        if (user.sessions && user.sessions.length > 0) {
            // Iterate over each session of the user
            user.sessions.forEach(session => {
                // Extract the day from session start time
                const sessionStart = new Date(session.sessionStart);
                const day = sessionStart.toISOString().split('T')[0]; // Extracting date part (YYYY-MM-DD)

                // Calculate reading duration in milliseconds
                const sessionEnd = new Date(session.sessionEnd);
                const sessionDuration = sessionEnd - sessionStart;

                // Accumulate reading durations for each day
                if (!dayReadingMap[day]) {
                    dayReadingMap[day] = 0;
                    daySessionCount[day] = 0;
                }
                dayReadingMap[day] += sessionDuration;
                daySessionCount[day]++;
            });
        }
    });

    // Calculate average reading duration for each day
    const averageReadingByDay = {};
    for (const day in dayReadingMap) {
        const totalReading = dayReadingMap[day];
        const sessions = daySessionCount[day];
        const averageReading = sessions > 0 ? totalReading / sessions : 0;
        averageReadingByDay[day] = averageReading.toFixed(2); // Rounded to 2 decimal places
    }

    return averageReadingByDay;
}

// Function to calculate average ratings for an Author
function calculateAverageRatings(bookData) {
    const authorRatings = {};

    // Iterate over each book in the data
    bookData.forEach(book => {
        const author = book.author;
        const rating = book.rating;

        // If author is not in the authorRatings object, initialize it with an empty array
        if (!authorRatings[author]) {
            authorRatings[author] = [];
        }

        // Add rating to the corresponding author's array
        authorRatings[author].push(rating);
    });

    const averageRatings = {};

    // Calculate the average rating for each author
    for (const author in authorRatings) {
        const ratings = authorRatings[author];
        const sum = ratings.reduce((acc, curr) => acc + curr, 0);
        const averageRating = sum / ratings.length;
        averageRatings[author] = averageRating.toFixed(2); // Rounded to 2 decimal places
    }

    return averageRatings;
}


app.listen(5005, () => {
    console.log("Backend is running");
});
