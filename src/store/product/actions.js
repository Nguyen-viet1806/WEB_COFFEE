import {
  callApiGetListProduct,
  callApiGetListProductWithPage,
  callApiAddFileImg,
  callApiAddProduct,
  callApiUpdateProduct,
  callApiGetListProductByNameWithPage,
  callApiGetListProductByNameWithPageV,
  callApiGetListProductByStatusWithPage,
  callApiGetListProductByStatusWithPageV,
  callApiGetListProductByStatusAndByCategoryWithPageLimit,
} from "@/api/product.js";

const getListProduct = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProduct(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductWithPage = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductWithPage(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductByStatusAndByCategoryWithPageLimit = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductByStatusAndByCategoryWithPageLimit(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductByNameWithPage = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductByNameWithPage(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductByNameWithPageV = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductByNameWithPageV(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT_ALL_PAGE", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getListProductByStatusWithPage = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductByStatusWithPage(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getListProductByStatusWithPageV = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetListProductByStatusWithPageV(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_PRODUCT_ALL_PAGE", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const addFileImg = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddFileImg(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addProduct = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddProduct(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateProduct = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiUpdateProduct(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getListProduct,
  getListProductWithPage,
  getListProductByStatusAndByCategoryWithPageLimit,
  getListProductByNameWithPage,
  getListProductByNameWithPageV,
  getListProductByStatusWithPageV,
  getListProductByStatusWithPage,
  addFileImg,
  addProduct,
  updateProduct,

};
