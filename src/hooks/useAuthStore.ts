import { User } from "firebase/auth";
import { create } from "zustand";

type State = {
  user:
    | User
    | undefined;
  isAuthenticated: boolean;
};

type Action = {
  setUser: (user: State["user"]) => void;
  login: (user:User) => void;
  logout: () => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  user: localStorage.getItem("document_user")
    ? JSON.parse(localStorage.getItem("document_user") || "{}")
    : undefined,
  isAuthenticated: !!localStorage.getItem("document_user"),
  setUser: (user) => {
    localStorage.setItem("document_user", JSON.stringify(user));
    set({
      user,
      isAuthenticated: true,
    });
  },
  login: (user:User) => {
    localStorage.setItem("document_user", JSON.stringify(user));
    set({
      user,
      isAuthenticated: true,
    });
  },
  logout: () => {
    localStorage.removeItem("document_user");
    set({
      user: undefined,
      isAuthenticated: false,
    });
  },
}));
