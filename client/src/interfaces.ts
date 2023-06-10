import { ReactNode } from "react";

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
    action?: (lang: ILanguage) => void;
    forModal?: boolean
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


export interface IEditWordData {
    word: string,
    lang: ILanguage,
    setWord: (val: string) => void,
    setLang: (val: ILanguage) => void,

    newSpeechPart?: string[],
    setNewSpeechPart?: (val: string[]) => void,
    newTranscription?: string,
    setNewTranscription?: (val: string) => void,
    newSynonyms?: string[],
    setNewSynonyms?: (val: string[]) => void,
    newAntonyms?: string[],
    setNewAntonyms?: (val: string[]) => void,
    newDefinitions?: string[],
    setNewDefinitions?: (val: string[]) => void,
    newExamples?: string[],
    setNewExamples?: (val: string[]) => void
}

export interface IBlock {
    index?: number,
    title: string,
    dataList: string[] | undefined,
    setDataList: (val: string[]) => void,
    large?: boolean
}
export interface ITableDefaultCell {
    _id: string,
    word: string,
    speechPart: string[],
    transcription: string,
    example: string[],
    definition: string[],
    synonyms: string[],
    antonyms: string[],

    isFullDataShown: boolean,
    toggle: () => void
}

export interface IModal {
    isActive: boolean,
    toggle: () => void,
    children: ReactNode
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

export interface AuthActionForAC {
    type: string,
    payload: AuthCredentials | string
}





//states 
export interface AuthState {
    token: string | null,
    email: string | null,
    errorMessage: string,
}

export interface IWordsState {
    isLoading: boolean,
    totalPages: number,
    pageNumber: number,
    searchTerm: string,
    sourceLang: ILanguage,
    targetLang: ILanguage,
    words: IWordsData[],
    activeItemId: string
}





//request
export interface IRequestData {
    pageNumber: number,
    sourceLang: ILanguage,
    targetLang: ILanguage
    searchTerm?: string,
}

export interface AuthCredentials {
    email: string,
    password: string
}



// dispatch
export type AuthDispatchType = (args: AuthActionForAC) => AuthActionForAC




//recieved data 
export interface IWordsData {
    _id: string,
    sourceLang: string,
    sourceWord: string,
    targetLang: string,
    targetWord: string,

    sourceSpeechPart: string[],
    sourceTranscription: string,
    sourceSynonyms: string[],
    sourceAntonyms: string[],
    sourceDefinitions: string[],
    sourceExamples: string[],

    targetSpeechPart: string[],
    targetTranscription: string,
    targetSynonyms: string[],
    targetAntonyms: string[],
    targetDefinitions: string[],
    targetExamples: string[],
}
