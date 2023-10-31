import { ApiResponse } from '../base-response';

export type RegisterResponseType = ApiResponse<{ email: string }>;

export type LoginResponseType = ApiResponse<{ accessToken: string }>;

export type UpdatePasswordResponseType = ApiResponse<{ email: string }>;
