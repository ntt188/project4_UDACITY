# project4_UDACITY

## Overview

This project is a simple web application that allows users to input a URL, which is then sent to a sentiment analysis API. The API processes the content of the URL and returns a sentiment analysis result, which is displayed on the webpage. The project includes front-end and back-end components, with a focus on learning API integration, webpack configuration, and basic testing with Jest.

## Features

- User can input a URL to analyze.
- Sentiment analysis results are fetched from an external API.
- Displays analysis results such as agreement, confidence, subjectivity, and more.
- Client-side validation to ensure the URL format is correct.
- Basic unit testing using Jest.

## Technologies Used

- Frontend: HTML, SCSS, JavaScript
- Backend: Node.js, Express
- API: MeaningCloud Sentiment Analysis API (or mock API for testing)
- Build Tool: Webpack
- Testing: Jest

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ntt188/project4_UDACITY.git
    cd project4_UDACITY
    ```

2. Install dependencies:

    Make sure you have Node.js installed, then run:
    ```bash
    npm install
    ```

3. Create .env file:

    In the root directory, create a .env file and add your API key for the MeaningCloud Sentiment Analysis API:
    ```bash
    API_KEY=your-meaningcloud-api-key
    ```

4. Run the development server:

    Use the following command to start the development server:
    ```bash
    npm run build-dev
    ```
    The app will open in your browser at `http://localhost:8080`.
    
5. Build for production:

    To create a production build, run:
    ```bash
    npm run build-prod
    ```

6. Run the server:

    After building, start the backend server to serve the app:
    ```bash
    npm start
    ```
    The server will run on `http://localhost:8082`.

## Testing
    To run the unit tests for this project, use the following command:
    ```bash
    npm run test
    ```

## Author

Nguyen Thanh Thang