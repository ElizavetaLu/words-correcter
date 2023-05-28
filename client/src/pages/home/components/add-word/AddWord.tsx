import { Dispatch, useState } from "react";

import RowSpace from "../../../../components/row-space/RowSpace";
import Input from "../../../../components/inputs/input/Input";
import Cross from "../../../../components/cross-btn/Cross";
import "./AddWord.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBrandNewWord } from "../../../../store/actions/actionCreators";



const AddWord = () => {

    const dispatch: Dispatch<any> = useDispatch();

    // brand new author's word
    const [sourceWord, setSourceWord] = useState<string>('');
    const [targetWord, setTargetWord] = useState<string>('');

    const { sourceLang, targetLang } = useSelector((state: any) => state.words);


    const onAddNewWord = () => {
        if (!sourceWord.trim() || !targetWord.trim()) return

        const newWord = {
            sourceLang: sourceLang.code,
            sourceWord,
            targetLang: targetLang.code,
            targetWord
        };

        dispatch(addBrandNewWord(newWord));

        setSourceWord('');
        setTargetWord('');
    }

    return (
        <div className="add-word">
            <Input value={sourceWord} setValue={setSourceWord} />
            <Input value={targetWord} setValue={setTargetWord} />

            <RowSpace>
                <div className="add-word__button-container" onClick={onAddNewWord}>
                    <Cross defaultWhite />
                </div>
            </RowSpace>
        </div>
    )
}

export default AddWord