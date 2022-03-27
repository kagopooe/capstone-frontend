import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import authHeader from './auth-header';
import http from '../http-common'

const API_URL = 'https://pizzaplanet-capstone.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
