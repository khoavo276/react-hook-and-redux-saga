export const ACTIONS = {
    GET_LIST_USER: 'GET_LIST_USER',
    SAVE_USER_INFO: 'SAVE_USER_INFO',
};

export const getListUsers = () => {
    return { type: ACTIONS.GET_LIST_USER }
};
