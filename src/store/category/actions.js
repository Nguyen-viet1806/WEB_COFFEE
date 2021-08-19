import {
  callApiGetDanhSachCategory,
  callApiGetDanhSachCategoryByStatus,
  callApiGetDanhSachCategoryByStatusWithPage,
  callApiAddCategory,
  callApiUpdateCategory,
  callApiGetDanhSachCategoryWithPage,
  callApiGetDanhSachCategoryBySearchWithPage,
} from "@/api/category.js";

const getListCategory = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiGetDanhSachCategory(payload)
        .then((response) => {
          if (response) {
            context.commit("SET_LIST_CATEGORY", response.data);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

const getListCategoryWithPage = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiGetDanhSachCategoryWithPage(payload)
        .then((response) => {
          if (response) {
            context.commit("SET_LIST_CATEGORY", response.data);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

const getListCategoryBySearchWithPage = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiGetDanhSachCategoryBySearchWithPage(payload)
        .then((response) => {
          if (response) {
            context.commit("SET_LIST_CATEGORY", response.data);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

const getListCategoryByStatus = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiGetDanhSachCategoryByStatus(payload)
        .then((response) => {
          if (response) {
            context.commit("SET_LIST_CATEGORY", response.data);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

const getListCategoryByStatusWithPage = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiGetDanhSachCategoryByStatusWithPage(payload)
      .then((response) => {
        if (response) {
          context.commit("SET_LIST_CATEGORY", response.data);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addCategory = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiAddCategory(payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

const updateCategory = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiUpdateCategory(payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export default {
    getListCategory,
    getListCategoryWithPage,
    getListCategoryBySearchWithPage,
    getListCategoryByStatus,
    getListCategoryByStatusWithPage,
    addCategory,
    updateCategory
};