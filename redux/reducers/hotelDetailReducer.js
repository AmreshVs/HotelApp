import { OPEN_IMAGE_VIEWER, CLOSE_IMAGE_VIEWER } from '../actionCreators/hotelDetailAC';
import { ADD_GUESTS, REMOVE_GUESTS } from '../actionCreators/hotelDetailAC';
import { CHOOSE_DATES } from '../actionCreators/hotelDetailAC';

const initialState = {
    showImageViewer: false,
    rooms: []
};

const HotelDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_IMAGE_VIEWER:
            return Object.assign({}, state, { showImageViewer: true });
        case CLOSE_IMAGE_VIEWER:
            return Object.assign({}, state, { showImageViewer: false });
        case ADD_GUESTS:
            return Object.assign({}, state, {rooms: action.roomsArr});
        case REMOVE_GUESTS:
            return Object.assign({}, state, {rooms: action.payload});
        case CHOOSE_DATES:
            return Object.assign({}, state, {dates: action.payload.dates, rooms: action.payload.rooms});
        default:
            return state;
    }
};

export default HotelDetailReducer;