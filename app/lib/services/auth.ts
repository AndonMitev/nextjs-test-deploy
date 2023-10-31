import { env } from '@/app/lib';
import {
  RegisterRequestType,
  RegisterResponseType,
  UpdatePasswordRequestType,
  UpdatePasswordResponseType,
} from '@/app/types';
import { getSession } from 'next-auth/react';
import { FetchError } from '../errors';

enum API_ERRORS {
  REGISTER = 'Failed to register user',
  UPDATE_PASSWORD = 'Failed to update password',
}

enum API_ENDPOINTS {
  REGISTER = 'auth/register',
  UPDATE_PASSWORD = 'auth/password',
}

export const registerApi = async (data: RegisterRequestType) => {
  const response = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/${API_ENDPOINTS.REGISTER}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new FetchError({
      message: API_ERRORS.REGISTER,
      status: response.status,
      statusText: response.statusText,
    });
  }

  return (await response.json()) as RegisterResponseType;
};

export const updatePasswordApi = async (data: UpdatePasswordRequestType) => {
  const session = await getSession();

  const response = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/${API_ENDPOINTS.UPDATE_PASSWORD}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new FetchError({
      message: API_ERRORS.UPDATE_PASSWORD,
      status: response.status,
      statusText: response.statusText,
    });
  }

  return (await response.json()) as UpdatePasswordResponseType;
};
