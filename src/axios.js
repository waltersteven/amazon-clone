import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-f3966.cloudfunctions.net/api',
  // 'http://localhost:5001/clone-f3966/us-central1/api',
});

export default instance;
