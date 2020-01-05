import { OPEN_IMAGE_VIEWER, CLOSE_IMAGE_VIEWER } from '../actionCreators/hotelDetailAC';
import { ADD_GUESTS, REMOVE_GUESTS } from '../actionCreators/hotelDetailAC';
import { CHOOSE_DATES, CLEAR_DATA, SAVE_REVIEW } from '../actionCreators/hotelDetailAC';
import { LOAD_HOTELDETAILS_DATA_PENDING, LOAD_HOTELDETAILS_DATA_SUCCESS, LOAD_HOTELDETAILS_DATA_ERROR } from '../actionCreators/hotelDetailAC';

// Open Image Viewer on Detail Page
export const openImageViewer = (payload) => {
  return {
    type: OPEN_IMAGE_VIEWER,
    payload
  };
};

// Close Image Viewer on Detail Page
export const closeImageViewer = (payload) => {
  return {
    type: CLOSE_IMAGE_VIEWER,
    payload
  };
};

const roomsArr = {};

// Add Guests for rooms
export const addGuests = (payload) => {
  roomsArr[payload.room] = payload.guests;
  return {
    type: ADD_GUESTS,
    payload,
    roomsArr
  };
};

// Remove Room and clear guests
export const removeGuests = (payload) => {
  return {
    type: REMOVE_GUESTS,
    payload,
  };
};

// Choose Date
export const chooseDates = (payload) => {
  return {
    type: CHOOSE_DATES,
    payload,
  };
};

// Load Data
export const loadHotelDetailsDataPending = (payload) => {
  return {
    type: LOAD_HOTELDETAILS_DATA_PENDING,
    payload
  };
};

export const loadHotelDetailsDataSuccess = (payload) => {
    return {
      type: LOAD_HOTELDETAILS_DATA_SUCCESS,
      payload
    };
};

export const loadHotelDetailsDataError = (payload) => {
    return {
      type: LOAD_HOTELDETAILS_DATA_ERROR,
      payload
    };
};

export const clearData = (payload) => {
  return {
    type: CLEAR_DATA,
    payload
  };
};

export const saveReview = (payload) => {
  return {
    type: SAVE_REVIEW,
    payload
  };
};