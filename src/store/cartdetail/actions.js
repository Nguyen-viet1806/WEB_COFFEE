import {
  callApiAddCartDetail,
  callApiGetListCartDetail,
  callApiDeleteCartDetail,
  callApiUpdateCartDetail,
  callApiPayCartDetail,
  callApiGetListBillByUser,
  callApiGetListBillDetailByBill,
  callApiUpdateBill
} from "@/api/cartdetail.js";

const addcartDetail = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddCartDetail(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getListCartDetail = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListCartDetail(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CART_DETAIL", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const deteleCartDetail = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiDeleteCartDetail(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const updateCartDetail = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUpdateCartDetail(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const payCartDetail = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiPayCartDetail(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListBill = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListBillByUser(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_BILL", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getListBillDetailByBill = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListBillDetailByBill(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_BILL_DETAIL", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateBill = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUpdateBill(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  addcartDetail,
  getListCartDetail,
  deteleCartDetail,
  updateCartDetail,
  payCartDetail,
  getListBill,
  getListBillDetailByBill,
  updateBill
};
