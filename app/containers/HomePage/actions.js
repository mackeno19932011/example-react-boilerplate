/** Actions in here */
import {
  FETCH_HOME_DATA_REQUEST,
  FETCH_HOME_DATA_SUCCESS,
  FETCH_HOME_DATA_FAILURE,
} from './constants';

function fetchHomeData(payload) {
  return {
    type: FETCH_HOME_DATA_REQUEST,
    payload,
  };
}

function fetchHomeDataSuccess(payload) {
  return {
    type: FETCH_HOME_DATA_SUCCESS,
    payload,
  };
}

function fetchHomeDataFailure(payload) {
  return {
    type: FETCH_HOME_DATA_FAILURE,
    payload,
  };
}

export {
  fetchHomeData,
  fetchHomeDataSuccess,
  fetchHomeDataFailure,
};
