import {combineReducers} from 'redux';
import initialAppState from './initialAppState';
import HotelDetailReducer from './hotelDetailReducer';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    initialState: initialAppState,
    hotelDetail: HotelDetailReducer,
    // form: formReducer
});

export default rootReducer;