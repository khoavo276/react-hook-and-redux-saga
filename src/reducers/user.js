import { ACTIONS } from '../actions/user';

export const userState = {
    listUser: null,
};

export default (state = userState, action) => {
    switch (action.type) {
        case ACTIONS.SAVE_USER_INFO:
            return {
                ...state,
                listUser: action.listUser,
            };
        default:
            return state;
    }
};
