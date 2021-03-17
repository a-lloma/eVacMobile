import api from './api';

const AuthService = {
  login: (data) => api.post('sua_subrota/de_login', data),
  register: (data) => api.post('sua_subrota/de_registro', data),
};
export default AuthService;
