# RecipeShare API

## Overview
RecipeShare API is a TypeScript-based RESTful API that estimates the preparation time for recipes based on provided instructions. It utilizes OpenAI's API to generate time estimates.

## Features
- Estimate recipe preparation time in minutes.
- Built with Express.js and TypeScript.
- Environment variable management using dotenv.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd recipeshare-api
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY="your_openai_api_key"
   ```
2. Start the server:
   ```
   npm start
   ```
3. Send a POST request to the `/estimate-recipe-time` endpoint with the recipe instructions in the request body.

## API Endpoint
### POST /estimate-recipe-time
- **Request Body**: 
  ```json
  {
    "data": "Your recipe instructions here."
  }
  ```
- **Response**:
  ```json
  {
    "estimatedTimeInMinutes": <number>
  }
  ```

## License
This project is licensed under the ISC License.