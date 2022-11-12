import React, {useState} from 'react';
export const AuthContext = React.createContext();

export default AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  return (
    <AuthContext.Provider
      value={{isLoggedIn, setIsLoggedIn, username, setUsername}}>
      {children}
    </AuthContext.Provider>
  );
};
