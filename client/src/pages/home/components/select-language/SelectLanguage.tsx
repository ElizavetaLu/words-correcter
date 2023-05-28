import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWords, setSourceLang, setTargetLang } from "../../../../store/actions/actionCreators";
import { ILanguage } from "../../../../interfaces";

import DropDownInput from "../../../../components/inputs/dropdown-input/DropDownInput";
import RowSpace from "../../../../components/row-space/RowSpace";
import "./SelectLanguage.scss";



const SelectLanguage = () => {

    const { sourceLang, targetLang } = useSelector((state: any) => state.words);


    const [currentSourceLang, setCurrentSourceLang] = useState<ILanguage>(sourceLang);
    const [currentTargetLang, setCurrentTargetLang] = useState<ILanguage>(targetLang);


    const dispatch: Dispatch<any> = useDispatch();

    const onReverse = () => {
        dispatch(setSourceLang(targetLang));
        dispatch(setTargetLang(sourceLang));

        dispatch(getWords(true,
            {
                pageNumber: 1,
                sourceLang: currentTargetLang.code,
                targetLang: currentSourceLang.code
            }
        ));

        setCurrentSourceLang(currentTargetLang);
        setCurrentTargetLang(currentSourceLang);
    }


    const onSourceLangSelect = (lang: ILanguage) => {

        dispatch(setSourceLang(lang));

        dispatch(getWords(true, {
            pageNumber: 1,
            sourceLang: lang.code,
            targetLang: currentTargetLang.code
        }))
    }

    const onTargetLangSelect = (lang: ILanguage) => {

        dispatch(setTargetLang(lang));

        dispatch(getWords(true, {
            pageNumber: 1,
            sourceLang: currentSourceLang.code,
            targetLang: lang.code
        }))
    }



    return (
        <div className="select-language">
            <div className="select-language__inputs">
                <DropDownInput
                    value={currentSourceLang}
                    setValue={setCurrentSourceLang}
                    action={onSourceLangSelect}
                />
                <img
                    src="/images/icons/arrows.png"
                    alt="swap-arrows"
                    className="select-language__button"
                    onClick={onReverse}
                />
                <DropDownInput
                    value={currentTargetLang}
                    setValue={setCurrentTargetLang}
                    action={onTargetLangSelect}
                />
            </div>
            <RowSpace />
        </div>
    )
}

export default SelectLanguage