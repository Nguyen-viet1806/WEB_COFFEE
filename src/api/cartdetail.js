
import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-commom.js"


export function callApiAddCartDetail(payload) {
    return HTTP({
      url: ENDPOINT.ADD_CART_DETAIL,
      method: "GET",
      params: payload,
    });
}

export function callApiGetListCartDetail(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_CART_DETAIL,
    method: "GET",
    params: payload,
  });
}
export function callApiDeleteCartDetail(payload) {
  return HTTP({
    url: ENDPOINT.DELETE_CART_DETAIL,
    method: "GET",
    params: payload,
  });
}
export function callApiUpdateCartDetail(payload) {
  return HTTP({
    url: ENDPOINT.UPDATE_CART_DETAIL,
    method: "PUT",
    data: payload,
  });
}
export function callApiPayCartDetail(payload) {
  return HTTP({
    url: ENDPOINT.PAY,
    method: "GET",
    params: payload,
  });
}
export function callApiGetListBillByUser(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_BILL,
    method: "GET",
    params: payload,
  });
}

export function callApiGetListBillDetailByBill(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_BILL_DETAIL,
    method: "GET",
    params: payload,
  });
}

export function callApiUpdateBill(payload) {
  return HTTP({
    url: ENDPOINT.UPDATE_BILL,
    method: "GET",
    params: payload,
  });
}
