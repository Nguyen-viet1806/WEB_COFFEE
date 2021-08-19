import ENDPOINT from "@/api/endpoints.js";
import { HTTP } from "@/api/http-commom.js";

export function callApiLogin(payload) {
  return HTTP({
    url: ENDPOINT.LOGIN,
    method: "GET",
    params: payload,
  });
}

export function callApiAddFileImgAcount(payload) {
  return HTTP({
    url: ENDPOINT.ADD_FILE_IMG_ACCOUNT,
    method: "POST",
    data: payload,
  });
}
export function callApiAddAcount(payload) {
  return HTTP({
    url: ENDPOINT.ADD_ACCOUNT,
    method: "GET",
    params: payload,
  });
}
