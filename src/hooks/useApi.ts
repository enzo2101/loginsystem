import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.BASE_URL_API
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 1,
        name: 'João',
        email: 'joao@gmail.com'
      }
    }
    /* const response = await api.post("/validate", { token });
    return response.data; */
  },
  signup: async () => {
    return true;
/*     const response = await api.post("/register", {
      name,
      email,
      password
    })
    return response.data; */
  },
  signin: async (email: string, password: string) => {
    return {
      user: {
        id: 1,
        name: 'João',
        email: 'joao@gmail.com'
      },
      token: '123456789'
    }
    /* const response = await api.post("/signin", {
      email,
      password
    })
    return response.data; */
  },
  signout: async () => {
    return { status: true }
    /* const response = await api.post("logout");
    return response.data; */
  }
});