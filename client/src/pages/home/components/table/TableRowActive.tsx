import { useState } from "react";

import { IWordsData } from "../../../../interfaces";

import TinyDDInput from "../../../../components/inputs/tiny-dropdown-input/TinyDDInput";
import RowSpace from "../../../../components/row-space/RowSpace";
import Cross from "../../../../components/cross-btn/Cross";




const TableRowActive = ({ id, sourceLang, sourceWord, targetLang, targetWord }: IWordsData) => {


    const [newSourceText, setNewSourceText] = useState<string>(sourceWord);
    const [newSourceLang, setNewSourceLang] = useState<string>(sourceLang);

    const [newTargetText, setNewTargetText] = useState<string>(targetWord);
    const [newTargetLang, setNewTargetLang] = useState<string>(targetLang);


    const onSave = () => { }


    return (
        <div className="row">

            <div className="row__item-active">
                <textarea
                    className="row__textarea"
                    value={newSourceText}
                    onChange={e => setNewSourceText(e.target.value)}
                ></textarea>

                <div className="row__select-lang">
                    <TinyDDInput value={newSourceLang} setValue={setNewSourceLang} />
                </div>
            </div>

            <div className="row__item-active">
                <textarea
                    className="row__textarea"
                    value={newTargetText}
                    onChange={e => setNewTargetText(e.target.value)}
                ></textarea>

                <div className="row__select-lang">
                    <TinyDDInput value={newTargetLang} setValue={setNewTargetLang} />
                </div>
            </div>

            <RowSpace>
                <div className="row__buttons">
                    <div className="row__button-container" onClick={onSave} >
                        <div className="row__save"></div>
                    </div>
                    <div className="row__button-container" onClick={() => { }}>
                        <Cross defaultWhite />
                    </div>
                </div>
            </RowSpace>

        </div>
    )
}

export default TableRowActive