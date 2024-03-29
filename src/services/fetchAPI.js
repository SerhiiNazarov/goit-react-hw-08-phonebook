import axios from 'axios';

axios.defaults.baseURL =
  'https://nodejs-homework-rest-api-8qog.onrender.com/api';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/contacts', data);

  return result;
};

export const removeContact = async id => {
  const { data: result } = await axios.delete(`/contacts/${id}`);

  return result;
};
