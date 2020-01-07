import { OPEN_IMAGE_VIEWER, CLOSE_IMAGE_VIEWER, LOAD_PRICES } from '../actionCreators/hotelDetailAC';
import { ADD_GUESTS, REMOVE_GUESTS } from '../actionCreators/hotelDetailAC';
import { CHOOSE_DATES, SAVE_REVIEW } from '../actionCreators/hotelDetailAC';
import { LOAD_HOTELDETAILS_DATA_PENDING, LOAD_HOTELDETAILS_DATA_SUCCESS, LOAD_HOTELDETAILS_DATA_ERROR, CLEAR_DATA } from '../actionCreators/hotelDetailAC';
import moment from 'moment';

const initialState = {
    showImageViewer: false,
    dates: {startDate: moment().format(), endDate: moment().add(1,'days').format()},
    rooms: {1 : {adult: 1, children: 0}},
    pending: true,
    hotelDetail: [],
    error: null,
    save_review: null,
    prices_services: null,
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
        case LOAD_HOTELDETAILS_DATA_PENDING:
            return Object.assign({}, state, { pending: true });
        case LOAD_HOTELDETAILS_DATA_SUCCESS:
            return Object.assign({}, state, { pending: false, hotelDetail: action.payload });
        case LOAD_HOTELDETAILS_DATA_ERROR:
            return Object.assign({}, state, { pending: false, error: true });
        case CLEAR_DATA:
            return Object.assign({}, state, { pending: true, hotelDetail: [] });
        case SAVE_REVIEW:
            return Object.assign({}, state, { save_review: action.payload } );
        case LOAD_PRICES:
                return Object.assign({}, state, { prices_services: action.payload } );
        default:
            return state;
    }
};

export default HotelDetailReducer;