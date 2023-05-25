//components

export interface IPopup {
    isShown: boolean,
    message: string,
    toggle: () => void
}


//components props

export interface ILanguageDDInputProps {
    value: ILanguage,
    setValue: (lang: ILanguage) => void;
    action: (lang: ILanguage) => void;
}

export interface IInputWithLabel {
    type: string,
    name: string,
    label: string,
    value: string,
    onChange: (val: string) => void,
    error: string
    resetError: (emptString: string) => void,
}

export interface IInput {
    value: string,
    setValue: (val: string) => void
}

export interface ICross {
    action?: any,
    primary?: boolean,
    defaultWhite?: boolean,
    error?: boolean
}

export interface ITableRowDefault {
    sourceWord: string,
    targetWord: string,
    id: string
}

export interface IWordsData {
    id: string,
    sourceLang: string,
    sourceWord: string,
    targetLang: string,
    targetWord: string
}



// language
export interface ILanguage {
    name: string,
    code: string,
    flag: string
};



//action 
export interface AuthActionForReducer {
    type: string,
    payload: string
}


//states 
export interface AuthState {
    token: string | null,
    email: string | null,
    errorMessage: string,
}