import axios from 'axios';
import apiConfig from '@/configs/api.config';
import { cookies } from 'next/headers';

const axiosInstanceServer = axios.create({
  baseURL: apiConfig?.BASE_URL,
  timeout: 30000,
  withCredentials: true, // ✅ Ensures cookies are sent with requests
});

// Interceptor to add Authorization header
axiosInstanceServer.interceptors.request.use(
  async (config) => {
    // if (config.headers) {
    //   config.headers['Authorization'] = `ABID HASAN`;
    // }

    // const fullUrl = `${config.baseURL || ''}${config.url}`;
    // console.log(`[Server Request] ${config.method?.toUpperCase()} ${fullUrl}`);

    try {
      const cookieStore = await cookies();
      const accessToken = cookieStore.get("access_token")?.value;
      const refreshToken = cookieStore.get("refresh_token")?.value;

      // Access token (Bearer standard)
      if (accessToken) {
        config.headers["Authorization"] = accessToken;
      } else if (config.token) {
        config.headers["Authorization"] = config.token;
      }

      // Refresh token (custom header)
      if (refreshToken) {
        config.headers["x-refresh-token"] = refreshToken;
      } else if (config.refreshToken) {
        config.headers["x-refresh-token"] = config.refreshToken;
      }
    } catch (err) {
      console.warn("[AxiosServer] Could not read cookies:", err.message);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleAxiosErrorAsServer = (error) => {
  if (axios.isCancel(error)) console.warn('Request was canceled.');
  if (error.code === 'ECONNABORTED') console.error('Request timed out. Please try again later.');
  if (axios.isAxiosError(error)) {
    const code = error.response?.status;
    const errorMessage = error.response?.data?.message;

    if (!error.response) console.error('No response received from server:', error.message);
    else if (code === 404) console.warn(`Resource not found (404): ${errorMessage}`);
    else console.error(`Server error: ${code} - ${error}`);

  } else console.error(`Unknown error: ${error.message}`);

  return null;
  // throw error; // Propagate error if necessary
};

export async function fetchDataAsServer(endpoint, token = '') {
  // 🛑 Prevent API calls during build
  const isBuildTime = process.env.IS_BUILD === 'true';

  if (isBuildTime) {
    console.warn(`[BUILD-TIME] Skipping API call to ${endpoint}`);
    return null;
  }

  try {
    // const cookies = `token=${token}`;
    const response = await axiosInstanceServer.get(endpoint, {
      // headers: { token },
    });

    // console.log('[API RESPONSE]', response);
    return response?.data?.data;
  } catch (error) {
    handleAxiosErrorAsServer(error);
    return null;
  }
}

export default axiosInstanceServer;