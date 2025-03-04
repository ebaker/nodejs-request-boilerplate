require('dotenv').config();
const axios = require('axios');

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

async function main() {
  const endpoint = process.env.API_ENDPOINT || 'https://api.example.com/data';
  const data = await fetchData(endpoint);

  if (data) {
    console.log('Fetched data:', data);
    // Process the data here
  }
}

main();
