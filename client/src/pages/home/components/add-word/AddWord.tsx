import { useState } from "react";

import RowSpace from "../../../../components/row-space/RowSpace";
import Input from "../../../../components/inputs/input/Input";
import Cross from "../../../../components/cross-btn/Cross";
import "./AddWord.scss";



const AddWord = () => {

    // brand new author's word
    const [sourceText, setSourceText] = useState<string>('');
    const [targetText, setTargetText] = useState<string>('');


    const onAddNewWord = () => {
        if (!sourceText.trim() || !targetText.trim()) return

        setSourceText('');
        setTargetText('');
    }

    return (
        <div className="add-word">
            <Input value={sourceText} setValue={setSourceText} />
            <Input value={targetText} setValue={setTargetText} />

            <RowSpace>
                <div className="add-word__button-container" onClick={onAddNewWord}>
                    <Cross defaultWhite />
                </div>
            </RowSpace>
        </div>
    )
}

export default AddWord