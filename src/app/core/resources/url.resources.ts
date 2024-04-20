import { environment } from '../../../environments/environment.development';

export const URL_RESOURCES = {
  login: `${environment.apiUrl}/auth/login`,
  register: `${environment.apiUrl}/auth/register`,
  verifyToken: `${environment.apiUrl}/token/verify`,
};
