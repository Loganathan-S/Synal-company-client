const base = "/";

export const routePath = {
  home: base,
  auth: {
    home: base + "auth",
    login: base + "auth/login",
    logout: base + "auth/logout",
    register: base + "auth/register",
    forgotPassword: base + "auth/forgot-password",
  },
};
