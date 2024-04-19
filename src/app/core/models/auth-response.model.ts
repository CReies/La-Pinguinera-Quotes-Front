export interface IAuthResponseModel {
  token: string;
  user: IUser
}

interface IUser { username: string; email: string };
