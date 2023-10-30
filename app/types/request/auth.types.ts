export type RegisterRequestType = {
  email: string;
  name: string;
  password: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type UpdatePasswordRequestType = {
  oldPassword: string;
  newPassword: string;
};
