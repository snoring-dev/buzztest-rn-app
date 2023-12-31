/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 *
 */

import axios from "axios";
import { Constants } from "./Constants";

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: Constants.api.baseUrl,
});

// Callbacks
const onSuccess = function (response: any) {
  return response.data;
};

const onError = function (error: any) {
  console.error("Request Failed:", error.config);

  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error("Error Message:", error.message);
  }

  return Promise.reject(error.response || error.message);
};

const onSuccessWithRawResp = function (response: any) {
  return response;
};

/**
 * Request Wrapper with default success/error actions
 */
const request = function (options: any, rawResponse = false) {
  return client(options)
    .then(rawResponse ? onSuccessWithRawResp : onSuccess)
    .catch(onError);
};

export default request;
