export const TIMEOUT = 60000;
// const devBaseURL = "http://123.207.32.32:9001";
// const proBaseURL = "http://123.207.32.32:9001";
const devBaseURL = "http://121.41.231.220:3000";
const proBaseURL = "http://121.41.231.220:3000";
// const devBaseURL = "http://120.79.162.149:3000";
// const proBaseURL = "http://120.79.162.149:3000";
export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;