export const TIMEOUT = 60000;
const devBaseURL = "http://localhost:3000";
const proBaseURL = "http://localhost:3000";
export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
