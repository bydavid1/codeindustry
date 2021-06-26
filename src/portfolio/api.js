import axios from 'axios'

export default axios.create({
  baseURL: process.env.DB_HOST,
  headers: {
    "Content-type": "application/json"
  }
});