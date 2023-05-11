import { useMutation } from "@tanstack/react-query"
import { httpRequest } from "../services/httpService"
import { routerAPI } from "../routerPath"
import { IRegister } from "../interfaces/auth.interface"

export const authModel = {
  UserRegister: () => useMutation({ mutationFn: async (postData: IRegister) => httpRequest.post(routerAPI.auth.register, postData)}),
  UserLogin: () => useMutation({mutationFn: async (data: any) => httpRequest.post(routerAPI.auth.login, data.postData)}),
}