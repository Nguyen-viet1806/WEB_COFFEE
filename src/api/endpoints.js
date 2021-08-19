export default {
      //login
LOGIN: "/admin/account/login",
ADD_FILE_IMG_ACCOUNT: '/admin/account/addImg/',
ADD_ACCOUNT: '/admin/account/add',
//category
GET_LIST_CATEGORY: '/admin/category/findAll',
GET_LIST_CATEGORY_BY_SEARCH_WITH_PAGE: '/admin/category/findAllByNameWithPage/',
GET_LIST_CATEGORY_WITH_PAGE: '/admin/category/findAllWithPage/',
GET_LIST_CATEGORY_BY_STATUS: '/admin/category/findAllByStatus/',
GET_LIST_CATEGORY_BY_STATUS_WITH_PAGE: '/admin/category/findAllByStatusWithPage/',
ADD_CATEGORY: '/admin/category/add/',
UPDATE_CATEGORY: '/admin/category/update/',

//status
GET_STATUS_BY_ID: '/admin/status/findById/',

//product
GET_LIST_PRODUCT: '/admin/product/findAll',
GET_LIST_PRODUCT_WITH_PAGE: '/admin/product/findAllWithPage/',
ADD_FILE_IMG: '/admin/product/addImg/',
ADD_PRODUCT: '/admin/product/add/',
UPDATE_PRODUCT: '/admin/product/update/',
GET_LIST_PRODUCT_BY_NAME_WITH_PAGE: '/admin/product/findAllByNameWithPage/',
GET_LIST_PRODUCT_BY_NAME_WITH_PAGEV: '/admin/product/findAllByNameWithPageV/',
GET_LIST_PRODUCT_BY_STATUS_WITH_PAGE: '/admin/product/findAllByStatusWithPage/',
GET_LIST_PRODUCT_BY_STATUS_WITH_PAGE_V: '/admin/product/findAllByStatusWithPagev/',

GET_LIST_PRODUCT_BY_STATUS_ADN_BY_CATEGORY_WITH_PAGE_LIMIT: '/admin/product/findAllByStatusAndByCategoryWithPageLimit/',
//cartDeatail
GET_LIST_CART_DETAIL: '/admin/cartdetail/findAllByCart',
ADD_CART_DETAIL: '/admin/cartdetail/addDetail',
DELETE_CART_DETAIL: '/admin/cartdetail/delete',
UPDATE_CART_DETAIL: '/admin/cartdetail/updateDetail',
PAY: '/admin/cartdetail/payCartDetail',
//bill
GET_LIST_BILL: '/admin/bill/findAllByUser/',
GET_LIST_BILL_DETAIL: '/admin/billdetail/findAllByIdBill',
UPDATE_BILL: '/admin/bill/update',
}