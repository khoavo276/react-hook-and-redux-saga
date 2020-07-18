export const ACTIONS = {
    SHOW_LOADING: 'SHOW_LOADING',
    HIDE_LOADING: 'HIDE_LOADING',
};

export const showLoading = () => {
    return {type: ACTIONS.SHOW_LOADING};
};

export const hideLoading = () => {
    return {type: ACTIONS.HIDE_LOADING};
};