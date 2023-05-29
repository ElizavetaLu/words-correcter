import { Dispatch } from "react";
import { AnyAction } from "redux";
import { AuthCredentials, ILanguage, IRequestData } from "../../interfaces";
import {
    AUTH_ERROR,
    AUTH_USER,
    DELETE_WORD,
    ITEM_ID_TO_DELETE,
    SET_ACTIVE,
    SET_LOADING,
    SET_PAGE_NUMBER,
    SET_POPUP_MESSAGE,
    SET_SEARCH_TERM,
    SET_SOURCE_LANG,
    SET_TARGET_LANG,
    SET_TOTAL_PAGES,
    SET_WORDS,
    SHOW_MODAL,
    SHOW_POPUP,
    USER_EMAIL
} from "./types";
import { deleteWordFetch, loginFetch, setBrandNewWordFetch, setCorrectedWordFetch, wordsFetch } from "../../services";



// Authentication
export const login = (credentials: AuthCredentials, callback: () => void) => (dispatch: any) => {

    loginFetch(credentials)
        .then(({ data }) => {
            dispatch({ type: AUTH_USER, payload: data.token });
            dispatch({ type: USER_EMAIL, payload: data.email });

            localStorage.setItem('token', data.token);

            callback();
            window.location.reload();
        })
        .catch(() => dispatch(setAuthError('Invalid login credentials')))
};

export const logout = () => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: AUTH_USER, payload: '' });
    localStorage.removeItem('token');
    window.location.reload();
};

export const setAuthError = (errorMessage: string) => ({ type: AUTH_ERROR, payload: errorMessage });



// Words
export const getWords = (isNewDataRequest: boolean, payload: IRequestData) => (dispatch: Dispatch<AnyAction>) => {

    dispatch({ type: SET_LOADING });

    wordsFetch(payload)
        .then(({ data }) => {

            // if isNewDataRequest is true - rewrite state words data, otherwise - add data to arr
            dispatch({ type: SET_WORDS, payload: { data: data.docs, isNewDataRequest } });

            dispatch({ type: SET_TOTAL_PAGES, payload: data.totalPages });
            dispatch({ type: SET_LOADING });
        })
        .catch(err => console.log(err))
};


export const setCorrectedWord = (changedData: any) => (dispatch: Dispatch<AnyAction>) => {

    setCorrectedWordFetch(changedData)
        .then(({ data }) => {

            dispatch({ type: DELETE_WORD, payload: changedData.id });

            dispatch({ type: SET_POPUP_MESSAGE, payload: data.result });
            dispatch({ type: SHOW_POPUP });
        })
        .catch(err => console.log(err))
};



export const addBrandNewWord = (data: any) => async (dispatch: any) => {

    setBrandNewWordFetch(data)
        .then(({ data }) => {

            dispatch({ type: SET_POPUP_MESSAGE, payload: data.result });
            dispatch({ type: SHOW_POPUP });
        })
        .catch(err => console.log(err))
};

export const deleteWord = (id: string) => async (dispatch: any) => {

    deleteWordFetch(id)
        .then(({ data }) => {

            dispatch({ type: DELETE_WORD, payload: id });


            setTimeout(() => {
                dispatch({ type: SET_POPUP_MESSAGE, payload: data.result });
                dispatch({ type: SHOW_POPUP })
            }, 500)

        })
        .catch(err => console.log(err))
};






export const setSearchTerm = (payload: string) => ({ type: SET_SEARCH_TERM, payload });

export const setPageNumber = (payload: number) => ({ type: SET_PAGE_NUMBER, payload });

export const setSourceLang = (payload: ILanguage) => {

    localStorage.setItem("sourceLanguage", JSON.stringify(payload));
    return { type: SET_SOURCE_LANG, payload };
};

export const setTargetLang = (payload: ILanguage) => {

    localStorage.setItem("targetLanguage", JSON.stringify(payload));
    return { type: SET_TARGET_LANG, payload };
};

export const setActiveIndex = (id: string) => ({ type: SET_ACTIVE, payload: id });



//popup
export const showPopup = () => ({ type: SHOW_POPUP });

export const setPopupMessage = (message: string) => ({ type: SET_POPUP_MESSAGE, payload: message });


//modal
export const showModal = () => ({ type: SHOW_MODAL });

export const setItemIdToDelete = (id: string) => ({ type: ITEM_ID_TO_DELETE, payload: id });