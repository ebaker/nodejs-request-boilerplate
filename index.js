require('dotenv').config();

async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

async function main() {
  const endpoint = process.env.API_ENDPOINT || 'https://jsonplaceholder.typicode.com/posts/1';
  const data = await fetchData(endpoint);

  if (data) {
    console.log('Fetched data:', data);
    // Process the data here
  }
}

if (require.main === module) {
  main();
}

module.exports = { fetchData };
