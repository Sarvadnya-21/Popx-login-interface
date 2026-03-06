import { createContext, useContext, useState, useEffect } from 'react';
import {
  getCurrentUserEmail,
  setCurrentUserEmail,
  clearCurrentUser,
  findUser,
  getUsers,
  saveUsers,
} from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = getCurrentUserEmail();
    if (email) {
      const u = findUser(email);
      if (u) setUser(u);
      else clearCurrentUser();
    }
  }, []);

  function login(email, password) {
    const u = findUser(email);
    if (u && u.password === password) {
      setCurrentUserEmail(email);
      setUser(u);
      return true;
    }
    return false;
  }

  function logout() {
    clearCurrentUser();
    setUser(null);
  }

  function register(userData) {
    if (findUser(userData.email)) {
      return false;
    }
    const users = getUsers();
    users.push(userData);
    saveUsers(users);
    setCurrentUserEmail(userData.email);
    setUser(userData);
    return true;
  }

  function updateProfile(updates) {
    if (!user) return;
    const updated = { ...user, ...updates };
    const users = getUsers().map(u => (u.email === user.email ? updated : u));
    saveUsers(users);
    setCurrentUserEmail(updated.email);
    setUser(updated);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
