const CONSTANT = {
    API_URL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
    API_VERSION: process.env.API_VERSION || process.env.NEXT_PUBLIC_API_VERSION,
    API_PREFIX: process.env.API_PREFIX || process.env.NEXT_PUBLIC_API_PREFIX,
    
    API_METHOD: {
        OPTIONS: 'OPTIONS',
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        PATCH: 'PATCH',
        DELETE: 'DELETE',
    },
    API_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        INTERNAL_SERVER_ERROR: 500,
    },
    API_CACHE: {
        PUBLIC: 'public',
        PRIVATE: 'private',
    },
    API_CACHE_CONTROL: {
        MAX_AGE: 60,
        STALE_WHILE_REVALIDATE: 120,
    },
    JWT: {
        SECRET_KEY: process.env.JWT_SECRET || 'secure_secret_key',
        ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m',
        REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
    },
    ORIGIN_CATEGORIES: [
        { id: 1, name: "LOCAL" },
        { id: 2, name: "FOREIGN" },
    ],
    STATUSES: [
        { id: 1, name: "ACTIVE" },
        { id: 2, name: "DEACTIVATE" },
        { id: 3, name: "DELETE" },
    ],


    //────────────────────────────────────────────
    //? for Pagination
    //────────────────────────────────────────────
    ItemsPerPage : 12,
};

export default CONSTANT;