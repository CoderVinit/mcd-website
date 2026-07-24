// src/api/apiEndpoints.ts
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/login/user",
  },
  REGISTRATION: {
    STATES: "/api/state/101",
    SPORTS: "/api/findRefSport",
    CATEGORIES: "/registration/findUserCategoryTypeBYMainCategory/1",
    DISTRICTS: "/api/district",
    SUB_CATEGORIES: "/registration/findUserCategorySubTypeByUserCategoryTypeId",
    REGISTER: "/registration/singleFormRegistration",
  },
  UPLOAD: {
    IMAGE: "/api/upload-image",
  },
} as const;