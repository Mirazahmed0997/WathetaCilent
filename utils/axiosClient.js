'use client';

import axios from 'axios';
import apiConfig from '@/configs/api.config';


const axiosInstance = axios.create({
    baseURL: apiConfig?.BASE_URL,
    timeout: 30000,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        if (config.headers) {
            // config.headers['Authorization'] = `abid Hasan`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      // ask server to refresh via any protected call (or a dedicated /api/auth/ping)
      await axios.get("/api/auth/refresh", { withCredentials: true }).catch(() => {});
      return axiosInstance(original);
    }
    return Promise.reject(error);
  }
);

const getMessageFromResponse = (response) => {
    if (response?.data?.message) {
        return response.data.message;
    }
    return 'No response from server';
};

const handleAxiosError = (error) => {
    if (axios.isCancel(error)) {
        console.error('Request was canceled.');
        return;
    }

    if (error.code === 'ECONNABORTED') {
        console.error('Request timed out. Please try again.');
        return;
    }
    
    if (error.code === 'ERR_BAD_REQUEST') {
        console.error(error?.response?.data?.message || 'Request failed with status code 401');
        return;
    }

    if (axios.isAxiosError(error)) {
        const code = error.response?.status;
        const errorMessage =
            error.response?.data?.data?.message || error.response?.data?.message;

        if (code === 404) {
            console.error('Resource not found (404).');
            return;
        }

        console.error(`Server error: ${code} - ${errorMessage}`);
    } else {
        console.error(`Unknown error: ${error.message}`);
    }

    throw error;
};

export async function fetchData(endpoint) {
    try {
        const response = await axiosInstance.get(endpoint);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function postData(endpoint, data, isFileRequest = false) {
    try {
        const isFormData = data instanceof FormData;
        const requestData = isFormData ? data : JSON.stringify({ ...data });

        const headers = isFormData
            ? {} // Let Axios auto-set Content-Type with boundary
            : { 'Content-Type': 'application/json' };

        const config = {
            headers,
            ...(isFileRequest ? { responseType: 'blob' } : {})
        };

        const response = await axiosInstance.post(endpoint, requestData, config);

        if (isFileRequest) {
            return response.data;
        }

        const message = getMessageFromResponse(response);
        console.success(message);
        return response?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function updateData(endpoint, data) {
    try {
        const isFormData = data instanceof FormData;
        const requestData = isFormData ? data : JSON.stringify({ ...data });

        const headers = isFormData
            ? { 'Content-Type': 'multipart/form-data' }
            : { 'Content-Type': 'application/json' };

        const response = await axiosInstance.put(endpoint, requestData, { headers });

        const message = getMessageFromResponse(response);
        console.success(message);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function deleteData(endpoint, id) {
    const url = `${endpoint}${id}`;
    try {
        const response = await axiosInstance.delete(url);

        const message = getMessageFromResponse(response);
        console.warning(message);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function softDeleteData(endpoint, id) {
    const url = `${endpoint}${id}`;
    try {
        const response = await axiosInstance.patch(url);

        const message = getMessageFromResponse(response);
        console.warning(message);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function downloadFile(endpoint) {
    try {
        const response = await axiosInstance.get(endpoint, { responseType: 'blob' });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function uploadFile(endpoint, file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axiosInstance.post(endpoint, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        const message = getMessageFromResponse(response);
        console.success(message);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export default axiosInstance;