export const BASE_URL = 'http://localhost:3000';

// This is probably bad
export const getRows = async (table: String) => {
  const response = await fetch(BASE_URL+'/'+table);
  const data = await response.json();
  return data;
};