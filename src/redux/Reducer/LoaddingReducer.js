import { HIDE_LOADING, SHOW_LOADING } from "../Types/LoaddingType";

const stateDefaufl = {
    loadding: false
};

export const LoaddingReducer = (state = stateDefaufl, action) => {
    switch (action.type) {
        case SHOW_LOADING: {
            return { ...state, loadding: true };
        }
        case HIDE_LOADING: {
            return { ...state, loadding: false };
        }
        default: {
            return { ...state };
        }
    }
};
