import axios from "axios"

type axiosMethod = "GET" | "POST" | "PUT"

const _httpRequest = axios.create()

export const httpRequest = {
  http: _httpRequest,
  get: async (url: string) => _initRequest('GET', url),
  post: async (url: string, data: object | null = null, token: string = '') => _initRequest('POST', url, data, token),
}

const _initRequest = async (method: axiosMethod, url: string, data: object | null = null, token: string = '') => {
  const resData = await _httpRequest({
    method: method,
    url: url,
    data: data,
    headers: {},
  }).then((res) => res?.data)

  return resData?.result || null
}