import CONFIG from './config';

const API_ENDPOINTS = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINTS;
