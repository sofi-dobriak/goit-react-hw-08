import { User } from './contact-user';

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ErrorResponse {
  message: string;
}

export interface ThunkConfig {
  rejectValue: ErrorResponse;
}

export interface PostContact {
  name: string;
  number: string;
}

export interface UpdateContact extends PostContact {
  id: number;
}
