import { SHOW_MODAL,ITEM_ID_TO_DELETE } from "../actions/types";


const initialState = {
    isShown: false,
    itemIdToDelete: '',
}

const modalReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {

        case SHOW_MODAL:
            return { ...state, isShown: !state.isShown };

        case ITEM_ID_TO_DELETE:
            return { ...state, itemIdToDelete: payload };

        default:
            return state;
    }
}

export default modalReducer