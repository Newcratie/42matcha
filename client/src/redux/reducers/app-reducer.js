import {DISABLE_FIELD, ENABLE_FIELD, LOAD_USER, UPDATE_PROFILE} from "../action/types-action";

const initial = () => {
};

export function appReducer (state = initial, action) {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...action,
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
