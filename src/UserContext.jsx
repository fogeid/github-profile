import { createContext, useState } from 'react';
import { GET_USER } from './services/api';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState();

  async function getUser(user) {
    const { url, options } = await GET_USER(user);
    const response = await fetch(url, options);
    setData(response);
    console.log(response);
    console.log(data);
  };

  return (
    <UserContext.Provider value={{ getUser, data }}>
      { children }
    </UserContext.Provider>
  );
};