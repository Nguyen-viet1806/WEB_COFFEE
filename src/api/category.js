import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-commom.js"

export function callApiGetDanhSachCategory(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_CATEGORY,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachCategoryWithPage(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_CATEGORY_WITH_PAGE,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachCategoryBySearchWithPage(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_CATEGORY_BY_SEARCH_WITH_PAGE,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachCategoryByStatusWithPage(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_CATEGORY_BY_STATUS_WITH_PAGE,
      method: "GET",
      params: payload,
    });
}

export function callApiGetDanhSachCategoryByStatus(payload) {
  return HTTP({
    url: ENDPOINT.GET_LIST_CATEGORY_BY_STATUS,
    method: "GET",
    params: payload,
  });
}

export function callApiAddCategory(payload) {
    return HTTP({
      url: ENDPOINT.ADD_CATEGORY,
      method: "POST",
      data: payload,
    });
}

export function callApiUpdateCategory(payload) {
    return HTTP({
      url: ENDPOINT.UPDATE_CATEGORY,
      method: "PUT",
      data: payload,
    });
}