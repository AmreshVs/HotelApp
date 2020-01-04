import {combineReducers} from 'redux';
import initialAppState from './initialAppState';
import HotelDetailReducer from './hotelDetailReducer';
import HomeDataReducer from './homeDataReducer';
import RecommendedRoomReducer from './recommendedRoomsReducer';
import ExclusiveRoomReducer from './exclusiveRoomsReducer';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    initialState: initialAppState,
    hotelDetail: HotelDetailReducer,
    homeData: HomeDataReducer,
    recommendedRooms: RecommendedRoomReducer,
    exclusiveRooms: ExclusiveRoomReducer,
    // form: formReducer
});

export default rootReducer;