import { IWordsState } from '../../interfaces';
import {
    SET_LOADING,
    SET_PAGE_NUMBER,
    SET_SEARCH_TERM,
    SET_WORDS,
    SET_ACTIVE, 
    SET_SOURCE_LANG,
    SET_TARGET_LANG,
    SET_TOTAL_PAGES,
    DELETE_WORD
} from './../actions/types';


interface IAction {
    type: string,
    payload: any
}

export const sourceLangDefault = {
    name: 'English',
    code: 'en',
    flag: 'gb'
};

export const targetLangDefault = {
    name: 'Ukrainian',
    code: 'uk',
    flag: 'ua'
};




const sourceLang = localStorage.getItem("sourceLanguage")
const targetLang = localStorage.getItem("targetLanguage")

const initialState: IWordsState = {
    isLoading: false,
    totalPages: 0,
    pageNumber: 1,
    searchTerm: '',

    sourceLang: sourceLang ? JSON.parse(sourceLang) : sourceLangDefault,
    targetLang: targetLang ? JSON.parse(targetLang) : targetLangDefault,

    words: [],
    activeItemId: ''
}

const wordsReducer = (state = initialState, { type, payload }: IAction) => {

    switch (type) {
        case SET_LOADING:
            return { ...state, isLoading: !state.isLoading };

        case SET_TOTAL_PAGES:
            return { ...state, totalPages: payload };

        case SET_PAGE_NUMBER:
            return { ...state, pageNumber: payload };

        case SET_SEARCH_TERM:
            return { ...state, searchTerm: payload };

        case SET_WORDS:

            if (payload.isNewDataRequest) {
                return { ...state, words: payload.data };
            }
            return { ...state, words: [...state.words, ...payload.data] };

        case SET_ACTIVE:
            return { ...state, activeItemId: payload };

        case DELETE_WORD:

            const newArr = state.words.filter(item => item._id !== payload)

            return { ...state, words: newArr };

        case SET_SOURCE_LANG:
            return { ...state, sourceLang: payload };

        case SET_TARGET_LANG:
            return { ...state, targetLang: payload };

        default:
            return state;
    }
}

export default wordsReducer 