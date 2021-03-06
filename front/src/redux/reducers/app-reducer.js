import {ADD_TAG, DISABLE_FIELD, ENABLE_FIELD, LOAD_USER, UPDATE_PROFILE, USER_ERROR} from "../action/types-action";

const initial = () => {
};

export function appReducer (state = initial, action) {
    switch (action.type) {
        case ADD_TAG:
            return {
                ...action,
            };
        case USER_ERROR:
            return {
                ...action,
            };
        case LOAD_USER:
            return {
                ...action,
                user : {
                    ...action.user,
                    userTags: action.userTags
                },
                field: null,
            };
        case DISABLE_FIELD:
            return {
                ...action,
                field: null,
            };
        case ENABLE_FIELD:
            return {
                ...action,
            };
        case UPDATE_PROFILE:
            return {
                ...action,
            };
        default:
            return state
    }
}
