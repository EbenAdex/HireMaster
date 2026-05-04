import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { updateStoredUser } from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("hiremaster_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    const normalizedUser = {
      id: userData.id,
      email: userData.email,
      role: userData.role || "applicant",
      name: userData.fullName || userData.name || "HireMaster User",
      fullName: userData.fullName || userData.name || "HireMaster User",
      avatar: userData.avatar || "",
      createdAt: userData.createdAt || new Date().toISOString(),
    };

    setUser(normalizedUser);
    localStorage.setItem("hiremaster_user", JSON.stringify(normalizedUser));
  };

  const loginAdmin = ({ email, name, avatar }) => {
    const adminUser = {
      id: "admin-static",
      email,
      role: "admin",
      name: name || "Admin User",
      fullName: name || "Admin User",
      avatar: avatar || "",
    };

    setUser(adminUser);
    localStorage.setItem("hiremaster_user", JSON.stringify(adminUser));
  };

  const updateUser = (updates) => {
    setUser((prev) => {
      const updatedUser = {
        ...prev,
        ...updates,
        name: updates.fullName || updates.name || prev.name,
        fullName: updates.fullName || updates.name || prev.fullName,
      };

      localStorage.setItem("hiremaster_user", JSON.stringify(updatedUser));

      if (updatedUser.role !== "admin") {
        updateStoredUser({
          id: updatedUser.id,
          fullName: updatedUser.fullName,
          email: updatedUser.email,
          avatar: updatedUser.avatar,
        });
      }

      return updatedUser;
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hiremaster_user");
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      loginAdmin,
      logout,
      updateUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;