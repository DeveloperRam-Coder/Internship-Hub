// apiService.js

import axios from 'axios';

const apiUrl = 'https://demo.sheetlalogistics.com/api/settings/Country';

export const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to propagate it further
  }
};
