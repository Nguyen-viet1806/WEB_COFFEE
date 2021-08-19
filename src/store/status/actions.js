import {
  callApiGetStatusById,
  } from "@/api/status.js";
const getStatusById = (context, payload) => {
    return new Promise((resolve, reject) => {
      callApiGetStatusById(payload)
        .then((response) => {
          if (response) {
            context.commit("SET_STATUS_BY_ID", response.data);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export default {
    getStatusById,
};