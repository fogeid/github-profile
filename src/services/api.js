export const API_URL = 'https://api.github.com';

export function GET_USER(user) {
  return {
    url: API_URL + `/users/${user}`,
    options: {
      method: 'GET'
    }
  }
}