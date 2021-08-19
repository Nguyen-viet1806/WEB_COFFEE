import {
  callApiLogin,
  callApiAddFileImgAcount,
  callApiAddAcount,
} from "@/api/login.js";

const login = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiLogin(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const addFileImgAccount = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddFileImgAcount(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const addAccount = (context, payload) => {
  return new Promise((resolve, reject) => {
    callApiAddAcount(payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default { login, addFileImgAccount, addAccount };
