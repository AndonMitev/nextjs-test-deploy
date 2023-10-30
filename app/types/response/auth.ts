export type RegisterResponseType = {
  statusCode: number;
  message: string;
  data: {
    email: string;
  };
};

export type LoginResponseType = {
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
  };
};

export type UpdatePasswordResponseType = {
  statusCode: number;
  message: string;
  data: {
    email: string;
  };
};
