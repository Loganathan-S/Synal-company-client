import { useMutation } from "@tanstack/react-query"
import { httpRequest } from "../services/httpService"
import { routerAPI } from "../routerPath"
import { IRegister, ILogin } from "../interfaces/auth.interface"

export const authModel = {
  UserRegister: () => useMutation({ mutationFn: async (postData: IRegister) => httpRequest.post(routerAPI.auth.register, postData)}),
  UserLogin: () => useMutation({ mutationKey: ['userDetails'], mutationFn: async (postData: ILogin) => httpRequest.post(routerAPI.auth.login, postData)}),
}