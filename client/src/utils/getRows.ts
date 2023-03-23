const BASE_URL = 'http://localhost:3000/api';

export const getRows = async (table: String) => {
  const response = await fetch(BASE_URL+'/'+table);
  const data = await response.json();
  return data;
};