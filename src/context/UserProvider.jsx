import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const userContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});
  const [messages, setMessage] = useLocalStorage("messages", []);

  function RegisterUser(info) {
    setUser(info);
  }

  function deleteMessage(msg) {
    setMessage((prev) => prev.filter((m) => m !== msg));
  }
  function logoutUser() {
    setUser((prev) => {
      return { ...prev, isAuthenticated: false };
    });
  }

  function addMessage(msg) {
    setMessage((prev) => [...prev, msg]);
  }

  return (
    <userContext.Provider
      value={{
        user,
        messages,
        addMessage,
        RegisterUser,
        logoutUser,
        deleteMessage,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserProvider() {
  const x = useContext(userContext);
  return x;
}
