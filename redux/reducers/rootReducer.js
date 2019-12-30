import {combineReducers} from 'redux';
import initialAppState from './initialAppState';
import HotelDetailReducer from './hotelDetailReducer';
import HomeDataReducer from './homeDataReducer';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    initialState: initialAppState,
    hotelDetail: HotelDetailReducer,
    homeData: HomeDataReducer,
    // form: formReducer
});

export default rootReducer;