import axios from 'axios';
import { API_URL } from './config';

export const getMealById = async (mealId) => await axios.get(`${API_URL}lookup.php?i=${mealId}`);

export const getAllCategories = async () => await axios.get(`${API_URL}categories.php`);

export const getFilteredByCategory = async (categoryName) =>
  await axios.get(`${API_URL}filter.php?c=${categoryName}`);
