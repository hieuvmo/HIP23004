import { ILogin } from "types/auth.model";
import { unauthorizedRequest } from "./requests";

export const authServices = {
  async login(param: ILogin) {
    const { data } = await unauthorizedRequest.post("/login", param);
    return data;
  }
};
