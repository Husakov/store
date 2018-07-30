import { FETCH_VIDEOS, NEW_VIDEO } from '../actions/types';

const initialState = {
    Videos: [],
    video: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            return {
                ...state,
                Videos: action.payload
            };
        case NEW_VIDEO:
            return {
                ...state,
                video: action.payload
            };
        default:
            return state;
    }
}
