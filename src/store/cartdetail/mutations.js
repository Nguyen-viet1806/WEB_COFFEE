const SET_LIST_CART_DETAIL = (state, listCartDetail) => {
  state.listCartDetail = listCartDetail;
};
const SET_LIST_BILL = (state, listBill) => {
  state.listBill = listBill;
};
const SET_LIST_BILL_DETAIL = (state, listBillDetail) => {
  state.listBillDetail = listBillDetail;
};

export default {
  SET_LIST_CART_DETAIL,
  SET_LIST_BILL,
  SET_LIST_BILL_DETAIL,
};
