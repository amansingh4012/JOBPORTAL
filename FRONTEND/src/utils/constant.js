// export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
// export const JOB_API_END_POINT="http://localhost:8000/api/v1/job";
// export const APPLICATION_API_END_POINT="http://localhost:8000/api/v1/application";
// export const COMPANY_API_END_POINT="http://localhost:8000/api/v1/company";

const API_URL = import.meta.env.VITE_API_BASE_URL;
export const USER_API_END_POINT = `${API_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${API_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${API_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${API_URL}/api/v1/company`;