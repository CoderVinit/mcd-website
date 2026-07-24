// src/api/auth.ts
// Types are the single source of truth; API calls go through RTK Query (store/services/authApi.ts)

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginUser = {
  id: number | string;
  email?: string;
  name?: string;
  user_category_main?: string | number;
  [key: string]: unknown;
};

type LoginPayload = {
  status?: boolean;
  success?: boolean;
  message?: string;
  msg?: string;
  error?: string;
  type?: string;
  user?: LoginUser;
  authorisation?: { token?: string };
};

export type LoginResponse = LoginPayload & {
  payload?: LoginPayload;
};
