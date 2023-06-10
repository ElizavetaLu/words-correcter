import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopupMessage, showPopup } from "../../store/actions/actionCreators";

import SelectLanguage from "./components/select-language/SelectLanguage";
import SearchWords from "./components/search-words/SearchWords"; 
import Popup from "../../components/popup/Popup";
import Table from "./components/table/Table"; 


const Home = () => {

    const dispatch: Dispatch<any> = useDispatch();



    const { isShown, message } = useSelector((state: any) => state.popup)

    useEffect(() => {
        if (isShown) {
            setTimeout(() => {
                dispatch(showPopup());
                dispatch(setPopupMessage(''));
            }, 4000)
        }
    }, [isShown])

    return (
        <main className="main">
            <Popup isShown={isShown} message={message} toggle={() => dispatch(showPopup())} />

            <SearchWords />

            <SelectLanguage /> 

            <Table />
        </main>
    )
}

export default Home