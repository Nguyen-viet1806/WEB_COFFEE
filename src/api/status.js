import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-commom.js"

export function callApiGetStatusById(payload) {
    return HTTP({
      url: ENDPOINT.GET_STATUS_BY_ID,
      method: "GET",
      params: payload,
    });
}