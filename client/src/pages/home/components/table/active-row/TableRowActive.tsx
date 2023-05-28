import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex, setCorrectedWord } from "../../../../../store/actions/actionCreators";

import RowSpace from "../../../../../components/row-space/RowSpace";
import TableActiveCell from "../active-row-cell/TableActiveCell";
import Cross from "../../../../../components/cross-btn/Cross";
import "./TableRowActive.scss";



const TableRowActive = () => {

    const {activeItemId, activeWord } = useSelector((state: any) => state.words);

    const {
        sourceWord,
        sourceLang,
        targetWord,
        targetLang,
        speechPart,
        transcriptions,
        synonyms,
        antonyms,
        definitions,
        examples
    } = activeWord;

    const dispatch: Dispatch<any> = useDispatch();


    const [newSourceWord, setNewSourceWord] = useState<string>(sourceWord);
    const [newSourceLang, setNewSourceLang] = useState<string>(sourceLang);

    //try do empty arrays and pushe there data
    const [newSpeechPart, setNewSpeechPart] = useState<string[]>(speechPart);
    const [newTranscriptions, setNewTranscriptions] = useState<string[]>(transcriptions);
    const [newSynonyms, setNewSynonyms] = useState<string[]>(synonyms);
    const [newAntonyms, setNewAntonyms] = useState<string[]>(antonyms);
    const [newDefinitions, setNewDefinitions] = useState<string[]>(definitions);
    const [newExamples, setNewExamples] = useState<string[]>(examples);



    const [newTargetWord, setNewTargetWord] = useState<string>(targetWord);
    const [newTargetLang, setNewTargetLang] = useState<string>(targetLang);


    const onSave = () => {
        const correctedWord = {
            sourceLang: newSourceLang,
            sourceWord: newSourceWord,
            targetLang: newTargetLang,
            targetWord: newTargetWord, 
            speechPart: newSpeechPart,
            transcriptions: newTranscriptions,
            synonyms: newSynonyms,
            antonyms: newAntonyms,
            definitions: newDefinitions,
            examples: newExamples,
            id: activeItemId
        };

 
        dispatch(setCorrectedWord(correctedWord));
        dispatch(setActiveIndex(null));
    }


    return (
        <div className="row-active">
            <TableActiveCell
                word={newSourceWord}
                lang={newSourceLang}
                setWord={setNewSourceWord}
                setLang={setNewSourceLang}

                newSpeechPart={newSpeechPart} setNewSpeechPart={setNewSpeechPart}
                newTranscriptions={newTranscriptions} setNewTranscriptions={setNewTranscriptions}
                newSynonyms={newSynonyms} setNewSynonyms={setNewSynonyms}
                newAntonyms={newAntonyms} setNewAntonyms={setNewAntonyms}
                newDefinitions={newDefinitions} setNewDefinitions={setNewDefinitions}
                newExamples={newExamples} setNewExamples={setNewExamples}
            />

            <TableActiveCell
                word={newTargetWord}
                lang={newTargetLang}
                setWord={setNewTargetWord}
                setLang={setNewTargetLang}
            />


            <RowSpace>
                <div className="row-active__buttons">
                    <div className="row-active__button-container" onClick={onSave} >
                        <div className="row-active__save"></div>
                    </div>
                    <div className="row-active__button-container" onClick={() => dispatch(setActiveIndex(null))}>
                        <Cross defaultWhite />
                    </div>
                </div>
            </RowSpace>
        </div>
    )
}

export default TableRowActive