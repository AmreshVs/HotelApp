import { LOAD_RC_DATA_PENDING, LOAD_RC_DATA_SUCCESS, LOAD_RC_DATA_ERROR } from '../actionCreators/recommendedRoomsAC';

export const loadRcDataPending = (payload) => {
  return {
    type: LOAD_RC_DATA_PENDING,
    payload
  };
};

export const loadRcDataSuccess = (payload) => {
    return {
      type: LOAD_RC_DATA_SUCCESS,
      payload
    };
};

export const loadRcDataError = (payload) => {
    return {
      type: LOAD_RC_DATA_ERROR,
      payload
    };
};