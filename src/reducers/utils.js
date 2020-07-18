import { ACTIONS } from '../actions/utils';

export const utilsState = {
    loading: false,
};

export default (state = utilsState, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ACTIONS.HIDE_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
