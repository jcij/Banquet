export const ROUTES_URL = {
  HOME: "/",
  DASHBOARD: "/dashboard",

  TRANSACTIONS: "/dashboard/transactions",
  ADD_TRANSACTIONS: "/dashboard/transactions/createUpdate",

  POINT_OF_SALE: "/dashboard/point_of_sale",
  ADD_POINT_OF_SALE: "/dashboard/point_of_sale/createUpdate",

  REFUND_REQUEST: "/dashboard/refund_request",
  ADD_REFUND_REQUEST: "/dashboard/refund_request/createUpdate",

  LOGOUT: "/dashboard/logout",

  LOGIN: "/login",

  NOT_FOUND: "/404",
};

// const API_GATEWAY = "http://localhost:5000";
// const API_GATEWAY = "https://rmstudio-api.herokuapp.com";
const API_GATEWAY = "https://cashonex-node-api.vercel.app";

export const API_URL = {
  GET_ALL_DATA: `${API_GATEWAY}`,

  GET_CATEGORY: `${API_GATEWAY}/v1/admin/category/get`,
  CREATE_CATEGORY: `${API_GATEWAY}/v1/admin/category/create`,
  UPDATE_CATEGORY: `${API_GATEWAY}/v1/admin/category/update`,
  DELETE_CATEGORY: `${API_GATEWAY}/v1/admin/category/delete`,

  GET_POINTS_OF_SALE: `${API_GATEWAY}/v1/admin/pointOfSale/get`,
  CREATE_POINTS_OF_SALE: `${API_GATEWAY}/v1/admin/pointOfSale/create`,
  UPDATE_POINTS_OF_SALE: `${API_GATEWAY}/v1/admin/pointOfSale/update`,
  DELETE_POINTS_OF_SALE: `${API_GATEWAY}/v1/admin/pointOfSale/delete`,

  GET_SLIDER: `${API_GATEWAY}/v1/admin/slider/get`,
  CREATE_SLIDER: `${API_GATEWAY}/v1/admin/slider/create`,
  UPDATE_SLIDER: `${API_GATEWAY}/v1/admin/slider/update`,
  DELETE_SLIDER: `${API_GATEWAY}/v1/admin/slider/delete`,

  UPLOAD_IMAGES: `${API_GATEWAY}/v1/admin/file/upload`,
  UPLOAD_MULTIPLE_IMAGES: `${API_GATEWAY}/v1/admin/file/upload-multiple`,
  DELETE_IMAGES: `${API_GATEWAY}/v1/admin/file/destroy`,

  GET_SECTION: `${API_GATEWAY}/v1/admin/section/get`,
  CREATE_SECTION: `${API_GATEWAY}/v1/admin/section/create`,
  UPDATE_SECTION: `${API_GATEWAY}/v1/admin/section/update`,
  DELETE_SECTION: `${API_GATEWAY}/v1/admin/section/delete`,

  GET_GENERAL: `${API_GATEWAY}/v1/admin/general/get`,
  UPDATE_GENERAL: `${API_GATEWAY}/v1/admin/general/update`,
};
