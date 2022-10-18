import axios from 'axios';

import { IClientCreate, IClientUpdate } from './../interfaces/Client';

const { REACT_APP_API_URL } = process.env;

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getClients = async () => {
  try {
    const data = await api.get('/clients/');

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getClientById = async (id: string) => {
  try {
    const data = await api.get(`/clients/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createClient = async (payload: IClientCreate) => {
  try {
    const data = await api.post('/clients/post', payload);

    return data;
  } catch (error) {
    return(error);
  }
};

export const updateClient = async (id: string, payload: IClientUpdate) => {
  try {
    const data = await api.put(`/clients/${id}`, payload);

    return data;
  } catch (error) {
    return(error);
  }
};

export const deleteClient = async (id: string) => {
  try {
    const data = await api.delete(`/clients/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
