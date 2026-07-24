import { baseApi } from "../services/baseApi";
import { API_ENDPOINTS } from "../../api/apiEndpoints";
import type { LoginRequest, LoginResponse } from "../../api/auth";

export type { LoginRequest, LoginResponse };

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => {
        const body = new URLSearchParams();
        body.set("email", credentials.email);
        body.set("password", credentials.password);
        return {
          url: API_ENDPOINTS.AUTH.LOGIN,
          method: "POST",
          body,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
