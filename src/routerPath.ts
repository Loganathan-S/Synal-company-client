const base = "/";

const baseApiRoot = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:4000/' : null
const baseApi = baseApiRoot + "api"

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

export const routerAPI = {
   root: baseApiRoot,
   auth: {
      register: baseApi + "/user/account/register",
      login: baseApi + "/user/account/login",
   },
}
