import { ITEM_ID_TO_DELETE, SET_MODAL } from "../actions/types";


const initialState = {
    isShown: false,
    itemIdToDelete: ''
}

const modalReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {

        case SET_MODAL:
            return { ...state, isShown: !state.isShown };

        case ITEM_ID_TO_DELETE:
            return { ...state, itemIdToDelete: payload };

        default:
            return state;
    }
}

export default modalReducer