import ENDPOINT from "@/api/endpoints.js";
import {HTTP} from "@/api/http-commom.js"

export function callApiGetListProduct(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT,
      method: "GET",
      params: payload,
    });
  }
  export function callApiGetListProductByStatusAndByCategoryWithPageLimit(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT_BY_STATUS_ADN_BY_CATEGORY_WITH_PAGE_LIMIT,
      method: "GET",
      params: payload,
    });
  }
  
  export function callApiGetListProductByNameWithPage(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT_BY_NAME_WITH_PAGE,
      method: "GET",
      params: payload,
    });
  }

  export function callApiGetListProductByNameWithPageV(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT_BY_NAME_WITH_PAGEV,
      method: "GET",
      params: payload,
    });
  }
  
  export function callApiGetListProductByStatusWithPage(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT_BY_STATUS_WITH_PAGE,
      method: "GET",
      params: payload,
    });
  }
  export function callApiGetListProductByStatusWithPageV(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT_BY_STATUS_WITH_PAGE_V,
      method: "GET",
      params: payload,
    });
  }
  
  export function callApiGetListProductWithPage(payload) {
    return HTTP({
      url: ENDPOINT.GET_LIST_PRODUCT_WITH_PAGE,
      method: "GET",
      params: payload,
    });
  }  

  export function callApiAddFileImg(payload) {
    return HTTP({
      url: ENDPOINT.ADD_FILE_IMG,
      method: "POST",
      data: payload,
    });
  }   
  
  export function callApiAddProduct(payload) {
    return HTTP({
      url: ENDPOINT.ADD_PRODUCT,
      method: "POST",
      data: payload,
    });
  } 
  
  export function callApiUpdateProduct(payload) {
    return HTTP({
      url: ENDPOINT.UPDATE_PRODUCT,
      method: "PUT",
      data: payload,
    });
  } 
  
  
  