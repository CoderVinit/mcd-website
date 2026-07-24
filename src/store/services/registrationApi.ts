import { baseApi } from "./baseApi";
import { API_ENDPOINTS } from "../../api/apiEndpoints";

export type RefItem = { id: number; name: string };
export type SportItem = { sport_id: number; sport_name: string };
export type CategoryItem = { id: number; category_name: string };
export type SubCategoryItem = { id: number; sub_category_name: string };

export type RegisterRequest = {
  category_type: string;
  sub_category_type: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: "Male" | "Female" | "Other" | string;
  state: string;
  city: string;
  password: string;
  confirm_password: string;
  sport_id: string;
  mobile: string;
};

export type RegisterResponse = {
  success?: boolean;
  status?: boolean;
  message?: string;
  msg?: string;
  error?: string;
};

type ListResponse<T> = { data: T[] };

export const registrationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStates: builder.query<RefItem[], void>({
      query: () => API_ENDPOINTS.REGISTRATION.STATES,
      transformResponse: (response: ListResponse<RefItem> | RefItem[]) =>
        Array.isArray(response) ? response : response.data ?? [],
    }),

    getSports: builder.query<SportItem[], void>({
      query: () => API_ENDPOINTS.REGISTRATION.SPORTS,
      transformResponse: (response: ListResponse<SportItem>) => response.data ?? [],
    }),

    getCategories: builder.query<CategoryItem[], void>({
      query: () => API_ENDPOINTS.REGISTRATION.CATEGORIES,
      transformResponse: (response: ListResponse<CategoryItem>) => response.data ?? [],
    }),

    getDistricts: builder.query<RefItem[], string>({
      query: (stateId) => `${API_ENDPOINTS.REGISTRATION.DISTRICTS}/${stateId}`,
      transformResponse: (response: ListResponse<RefItem> | RefItem[]) =>
        Array.isArray(response) ? response : response.data ?? [],
    }),

    getSubCategories: builder.query<SubCategoryItem[], string>({
      query: (categoryId) =>
        `${API_ENDPOINTS.REGISTRATION.SUB_CATEGORIES}/${categoryId}`,
      transformResponse: (response: ListResponse<SubCategoryItem> | SubCategoryItem[]) =>
        Array.isArray(response) ? response : response.data ?? [],
    }),

    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (payload) => {
        const body = new URLSearchParams(
          Object.entries(payload) as [string, string][]
        );
        return {
          url: API_ENDPOINTS.REGISTRATION.REGISTER,
          method: "POST",
          body,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        };
      },
    }),
  }),
});

export const {
  useGetStatesQuery,
  useGetSportsQuery,
  useGetCategoriesQuery,
  useLazyGetDistrictsQuery,
  useLazyGetSubCategoriesQuery,
  useRegisterMutation,
} = registrationApi;
