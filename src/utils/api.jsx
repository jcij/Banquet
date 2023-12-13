/**
 * @description Class with functions with post, put, get, delete method api call
 */

// core module
import axios from "axios";
// import { getSessionState, StoredVariables } from "./session";
import toastr from "toastr";

// let tokenGet = getSessionState(StoredVariables.authToken)
//   ? getSessionState(StoredVariables.authToken).replace(/"/g, "")
//   : "";
let tokenGet = "";

var accessToken = tokenGet ? tokenGet : "";
//"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNjYzZjODc4NWFiMTAwMTM2NDgwMTQiLCJmaXJzdG5hbWUiOiJ2aW5hbXJhIiwibGFzdG5hbWUiOiJwYXJhc2hhciIsImVtYWlsIjoicGFyYXNoYXJ2aW4xMDJAZ21haWwuY29tIiwiZ2VuZGVyIjoibWFsZSIsImRvYiI6IjE5OTUtMDctMjhUMDA6MDA6MDAuMDAwWiIsImNvdW50cnlfY29kZSI6Iis5MSIsInBob25lX251bWJlciI6Iis5MTc0MTUyMDc5ODQiLCJwcm9maWxlIjoiIiwidXNlcl90eXBlIjoibWVuIiwiZGVmYXVsdF9wcm9maWxlIjp0cnVlLCJpYXQiOjE2MjQxMDI1MDEsImF1ZCI6IlNxVG9zZHNkS2VOcFJvSmVDdCJ9.Zz9puZSIgc5bI7f0_mReICJfrUbZ3RPi7KwHcOcTLCk"

// console.log("accessToken", accessToken);

// Set headers for All APIs
var headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

var headers2 = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};

// var headers3 = {
//   Accept: "application/json",
//   "Content-Type": "application/x-www-form-urlencoded",
// };

/**
 *
 * @description function to call external api with url
 * @param {*} url - API URL
 * @returns error.response.
 * @memberof api
 */

/**
 *
 * @description action to call post api with/without auth token and post data
 * @param {*} url - API URL
 * @param {*} data - Post data object
 * @param {*} contenType - true for form-data and false for json
 * @param {*} auth - true/false for auth token pass or not
 * @memberof APIUtil
 */

export const postMethod = (url, data, contenType = true, auth = true) => {
  if (url !== false) {
    var headersSet = "";
    if (contenType === true) {
      headersSet = headers2;
    } else {
      headersSet = headers;
    }
    if (auth === true) {
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }
    // console.log("headersSet", contenType, auth, accessToken, headersSet);
    try {
      return axios
        .post(url, data, { headers: headersSet })
        .then((response) => response)
        .catch((error) => {
          // console.log("error", error);
          if (error?.response) {
            if (error.response?.status) {
              if (error.response?.data) {
                if (error.response.data?.message) {
                  toastr.error(error.response.data?.message);
                }
              }
            }
          }
        });
    } catch (error) {
      return { success: false, message: "500 (Internal Server Error)!" };
    }
  } else {
    return {
      success: false,
      message: "Url is not defined!",
    };
  }
};

/**
 *
 * @description action to call get api with/without auth token
 * @param {*} url - API URL
 * @param {*} contenType - true for form-data and false for json
 * @param {*} auth - true/false for auth token pass or not
 * @memberof APIUtil
 */

export const getMethod = (url, contenType = true, auth = true) => {
  if (url !== false) {
    var headersSet = "";
    if (contenType === true) {
      headersSet = headers2;
    } else {
      headersSet = headers;
    }

    if (auth === true) {
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
      return axios
        .get(url, { headers: headersSet })
        .then((response) => response)
        .catch((error) => {
          if (error?.response) {
            if (error.response?.status) {
              if (error.response?.data) {
                toastr.error(error.response.data?.message);
              }
            }
          }
        });
    } catch (error) {
      return { success: false, message: "500 (Internal Server Error)!" };
    }
  } else {
    return {
      success: false,
      message: "Url is not defined!",
    };
  }
};

/**
 *
 * @description action to call put api with/without auth token
 * @param {*} url - API URL
 * @param {*} data - Put data object
 * @param {*} contenType - true for form-data and false for json
 * @param {*} auth - true/false for auth token pass or not
 * @memberof APIUtil
 */

export const putMethod = (url, data, contenType = true, auth = true) => {
  if (url !== false) {
    var headersSet = "";
    if (contenType === true) {
      headersSet = headers2;
    } else {
      headersSet = headers;
    }

    if (auth === true) {
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
      return axios
        .put(url, data, { headers: headersSet })
        .then((response) => response)
        .catch((error) => {
          if (error?.response) {
            if (error.response?.status) {
              if (error.response?.data) {
                toastr.error(error.response.data?.message);
              }
            }
          }
        });
    } catch (error) {
      return { success: false, message: "500 (Internal Server Error)!" };
    }
  } else {
    return {
      success: false,
      message: "Url is not defined!",
    };
  }
};

/**
 *
 * @description action to call delete api with/without auth token
 * @param {*} url - API URL
 * @param {*} data - Delete data object
 * @param {*} contenType - true for form-data and false for json
 * @param {*} auth - true/false for auth token pass or not
 * @memberof APIUtil
 */

export const deleteMethod = (url, contenType = true, auth = true) => {
  if (url !== false) {
    var headersSet = "";
    if (contenType === true) {
      headersSet = headers2;
    } else {
      headersSet = headers;
    }

    if (auth === true) {
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
      return axios
        .delete(url, { headers: headersSet })
        .then((response) => response)
        .catch((error) => {
          if (error?.response) {
            if (error.response?.status) {
              if (error.response?.data) {
                toastr.error(error.response.data?.message);
              }
            }
          }
        });
    } catch (error) {
      return { success: false, message: "500 (Internal Server Error)!" };
    }
  } else {
    return {
      success: false,
      message: "Url is not defined!",
    };
  }
};
