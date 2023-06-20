const base = "/";

// const baseApiRoot = process.env.NODE_ENV === 'development' ? 'http://192.168.1.210:4000/' : null
const baseApiRoot = "http://localhost:3002/"
const baseApi = baseApiRoot + "api"

export const routePath = {
  home: base,
  auth: {
    home: base + "auth",
    login: base + "auth/login",
    logout: base + "auth/logout",
    register: base + "auth/register",
    forgotPassword: base + "auth/forgot-password",
    companylist:base + "companylist"
  },
   
};

export const routerAPI = {
   root: baseApiRoot,
   auth: {
      register: baseApi + "/user/account/register",
      login: baseApi + "/user/account/login",
   },
}
