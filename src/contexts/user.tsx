import { createContext, useContext, useState } from 'react';

interface AuthContext {
  user?: string;
  logIn: () => void;
  logOut: () => void;
}

const UserContext = createContext({} as AuthContext);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string>();

  const logIn = () => {
    setUser("logged-in");
  };

  const logOut = async () => {
    setUser(undefined);
  };

  const authContext: AuthContext = { user, logIn, logOut };

  return (
    <UserContext.Provider value={authContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};
