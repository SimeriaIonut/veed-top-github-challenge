import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;

// Simple configuration for the API client, only needs the base URL
// to allow us to call the API with only the endpoint (e.g. /repositories)
const client = axios.create({
  baseURL: API_BASE_URL,
});

export default client;
