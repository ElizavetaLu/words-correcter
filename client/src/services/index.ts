import axios from "axios";
import { AuthCredentials, IRequestData } from "../interfaces";

const baseURL = 'http://localhost:7070/';
const token = localStorage.getItem('token');

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = token;

export const loginFetch = (payload: AuthCredentials) => {
    return axios.post('login', payload)
}


export const wordsFetch = ({ pageNumber = 1, sourceLang, targetLang, searchTerm }: IRequestData) => {
    return axios.get(`words/?page=${pageNumber}&limit=15&sourceLang=${sourceLang}&targetLang=${targetLang}${searchTerm ? '&keyWords=' + searchTerm : ''}`)
}

export const setCorrectedWordFetch = (payload: any) => {
    return axios.post('corrected-word', payload)
}

export const setBrandNewWordFetch = (payload: any) => {
    return axios.post('new-word', payload)
} 