import { useState } from "react";

import DropDownInput from "../../../../components/inputs/dropdown-input/DropDownInput";
import RowSpace from "../../../../components/row-space/RowSpace";
import { ILanguage } from "../../../../interfaces";
import "./SelectLanguage.scss";



const SelectLanguage = () => {

    const [currentSourceLang, setCurrentSourceLang] = useState<ILanguage>({ "name": 'Afrikaans', "code": 'af', "flag": 'za' });
    const [currentTargetLang, setCurrentTargetLang] = useState<ILanguage>({ "name": 'Amharic', "code": 'am', "flag": 'et' });



    const onReverse = () => { }


    const onSourceLangSelect = (lang: ILanguage) => { }

    const onTargetLangSelect = (lang: ILanguage) => { }


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