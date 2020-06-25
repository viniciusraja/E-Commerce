import {
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_INFO_SUCCESS,
} from './types';

   export function fetchUserInfoPending() {
      return {
        type: FETCH_USER_INFO_PENDING,
      };
    }
   export function fetchUserInfoError(error) {
      return {
        type: FETCH_USER_INFO_ERROR,
        payload: error,
      };
    }
   export function fetchUserInfoSuccess(data) {
      return {
        type: FETCH_USER_INFO_SUCCESS,
        payload: data,
      };
    }