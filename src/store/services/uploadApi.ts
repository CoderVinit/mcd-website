import { baseApi } from "./baseApi";
import { API_ENDPOINTS } from "../../api/apiEndpoints";

export interface UploadImageResponse {
  data: {
    url: string;
  };
  message?: string;
}

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<UploadImageResponse, FormData>({
      query: (formData) => ({
        url: API_ENDPOINTS.UPLOAD.IMAGE,
        method: "POST",
        body: formData,
        formData: true,
        withCredentials: false,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = uploadApi;
