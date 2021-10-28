/**
 * Adds the Cookie Session header if Local Storage 'allowCookies' is true
 *
 * @param config - Client Request Config
 * @returns {{headers: {authorization: string}, withCredentials: boolean}}
 */
export default function setSession(config) {
  const isSession = window.localStorage.getItem('allowCookies') ? true : false
  return {
    withCredentials: isSession,
    ...config,
    headers: {
      ...config.headers,
      authorization: isSession ? 'Session' : window.localStorage.getItem('authToken'),
    },
  }
}
