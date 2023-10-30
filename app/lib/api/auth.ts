import { env } from '@/app/lib';
import { RegisterRequestType, UpdatePasswordRequestType } from '@/app/types';
import { getSession } from 'next-auth/react';

enum API_ERRORS {
  REGISTER = 'Failed to register user',
  UPDATE_PASSWORD = 'Failed to update password'
}

enum API_ENDPOINTS {
  REGISTER = 'auth/register',
  UPDATE_PASSWORD = 'auth/password'
}

export const registerApi = async (data: RegisterRequestType) => {
  const response = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/${API_ENDPOINTS.REGISTER}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    throw new Error(API_ERRORS.REGISTER);
  }

  return response.json();
};

export const updatePasswordApi = async (data: UpdatePasswordRequestType) => {
  const session = await getSession();

  const response = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/${API_ENDPOINTS.UPDATE_PASSWORD}`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.accessToken}`
      }
    }
  );

  if (!response.ok) {
    throw new Error(API_ERRORS.UPDATE_PASSWORD);
  }

  return response.json();
};
