import axios from 'axios';

// API key: 36522902-e434b1ffe87f6bbd67c141777
const API_KEY = '36522902-e434b1ffe87f6bbd67c141777';
const URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
});

export async function getData(query, page) {
  try {
    const response = await axios.get(
      `${URL}?key=${API_KEY}&q=${query}&${searchParams}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
