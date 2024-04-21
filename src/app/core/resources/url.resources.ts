import { environment } from '../../../environments/environment.development';

export const URL_RESOURCES = {
  auth: {
    login: `${environment.apiUrl}/auth/login`,
    register: `${environment.apiUrl}/auth/register`,
  },
  books: {
    getAll: `${environment.apiUrl}/books`,
  },
  token: {
    verify: `${environment.apiUrl}/token/verify`,
  },
  quote: {
    create: `${environment.apiUrl}/quote/CalculateIndividualPrice`,
    list: `${environment.apiUrl}/quote/CalculateTotalListPrice`,
  },
};
