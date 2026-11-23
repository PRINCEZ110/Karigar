import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Attach the JWT access token from the auth state.
// TODO: Handle 401 responses by clearing the session and redirecting to login.

export default api;
