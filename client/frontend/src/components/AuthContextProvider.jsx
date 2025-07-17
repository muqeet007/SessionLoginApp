// AuthContextProvider.jsx
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import {AuthContext} from '../context/AuthContext'
// 1. Create the context


function AuthContextProvider({ children }) {
  // 2. Store the user info
  const [user, setUser] = useState(null);

  // 3. Fetch user info from session route
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get("/api/users/me");
      setUser(response.data.user);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setUser(null);
      } else {
        console.error("Error fetching user info:", error);
      }
    }
  };

  // 4. Use useEffect to call fetch on mount
  useEffect(() => {
    fetchUserInfo();
  }, []);

  // 5. Provide the user to children
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
