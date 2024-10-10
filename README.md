# Node.js Request Boilerplate

This is a boilerplate Node.js project set up for making HTTP requests to a JSON endpoint and processing the response. It's configured with ESLint for code quality and formatting.

## Prerequisites

- Node.js (preferably the latest LTS version)
- npm (comes with Node.js)

## Setup

1. Clone the repository:

   `git clone https://github.com/ebaker/nodejs-request-boilerplate.git`
   `cd nodejs-request-boilerplate`

2. Install dependencies:

   `npm install`

3. Set up your environment variables:
   
   Copy the `.env.example` file to `.env` and update the `API_ENDPOINT` with the actual endpoint provided for the interview.

   `cp .env.example .env`

## Usage

- To run the main script:

  `npm start`

- To check for linting issues:

  `npm run lint`

- To automatically fix linting and formatting issues:

  `npm run lint:fix`

## Project Structure

- `index.js`: Main entry point of the application
- `.eslintrc.json`: ESLint configuration
- `.env`: Environment variables (git-ignored)
- `package.json`: Project metadata and dependencies

## Dependencies

- `axios`: Promise based HTTP client for making requests
- `dotenv`: Loads environment variables from .env file

