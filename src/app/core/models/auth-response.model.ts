import { IUser } from './user.model';

export interface IAuthResponseModel {
  token: string;
  user: IUser;
}
