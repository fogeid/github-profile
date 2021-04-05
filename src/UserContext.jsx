import { createContext, useState } from 'react';
import { GET_USER } from './services/api';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState({});

  async function getUser(user) {
    const { url, options } = await GET_USER(user);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
  };

  return (
    <UserContext.Provider value={{ getUser, data }}>
      { children }
    </UserContext.Provider>
  );
};