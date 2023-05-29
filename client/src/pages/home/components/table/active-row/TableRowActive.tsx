import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex, setCorrectedWord } from "../../../../../store/actions/actionCreators";

import RowSpace from "../../../../../components/row-space/RowSpace";
import TableActiveCell from "../active-row-cell/TableActiveCell";
import Cross from "../../../../../components/cross-btn/Cross";
import { IWordsData } from "../../../../../interfaces";
import "./TableRowActive.scss";



const TableRowActive = () => {

    const { activeItemId, words } = useSelector((state: any) => state.words);

    const {
        sourceLang,
        sourceWord,
        targetLang,
        targetWord,

        sourceSpeechPart,
        sourceTranscriptions,
        sourceSynonyms,
        sourceAntonyms,
        sourceDefinitions,
        sourceExamples,

        targetSpeechPart,
        targetTranscriptions,
        targetSynonyms,
        targetAntonyms,
        targetDefinitions,
        targetExamples,

    } = words.find((item: IWordsData) => item._id === activeItemId);

    const dispatch: Dispatch<any> = useDispatch();


    const [newSourceWord, setNewSourceWord] = useState<string>(sourceWord);
    const [newSourceLang, setNewSourceLang] = useState<string>(sourceLang);

    const [newSourceSpeechPart, setNewSourceSpeechPart] = useState<string[]>(sourceSpeechPart);
    const [newSourceTranscriptions, setNewSourceTranscriptions] = useState<string[]>(sourceTranscriptions);
    const [newSourceSynonyms, setNewSourceSynonyms] = useState<string[]>(sourceSynonyms);
    const [newSourceAntonyms, setNewSourceAntonyms] = useState<string[]>(sourceAntonyms);
    const [newSourceDefinitions, setNewSourceDefinitions] = useState<string[]>(sourceDefinitions);
    const [newSourceExamples, setNewSourceExamples] = useState<string[]>(sourceExamples);


    const [newTargetWord, setNewTargetWord] = useState<string>(targetWord);
    const [newTargetLang, setNewTargetLang] = useState<string>(targetLang);

    const [newTargetSpeechPart, setNewTargetSpeechPart] = useState<string[]>(targetSpeechPart);
    const [newTargetTranscriptions, setNewTargetTranscriptions] = useState<string[]>(targetTranscriptions);
    const [newTargetSynonyms, setNewTargetSynonyms] = useState<string[]>(targetSynonyms);
    const [newTargetAntonyms, setNewTargetAntonyms] = useState<string[]>(targetAntonyms);
    const [newTargetDefinitions, setNewTargetDefinitions] = useState<string[]>(targetDefinitions);
    const [newTargetExamples, setNewTargetExamples] = useState<string[]>(targetExamples);



    const onSave = () => {

        const correctedWord = {
            sourceLang: newSourceLang,
            sourceWord: newSourceWord,
            targetLang: newTargetLang,
            targetWord: newTargetWord,

            sourceSpeechPart: newSourceSpeechPart,
            sourceTranscriptions: newSourceTranscriptions,
            sourceSynonyms: newSourceSynonyms,
            sourceAntonyms: newSourceAntonyms,
            sourceDefinitions: newSourceDefinitions,
            sourceExamples: newSourceExamples,

            targetSpeechPart: newTargetSpeechPart,
            targetTranscriptions: newTargetTranscriptions,
            targetSynonyms: newTargetSynonyms,
            targetAntonyms: newTargetAntonyms,
            targetDefinitions: newTargetDefinitions,
            targetExamples: newTargetExamples,

            id: activeItemId
        };


        dispatch(setCorrectedWord(correctedWord));
        dispatch(setActiveIndex(''));
    }


    return (
        <div className="row-active">
            <TableActiveCell
                word={newSourceWord}
                lang={newSourceLang}
                setWord={setNewSourceWord}
                setLang={setNewSourceLang}

                newSpeechPart={newSourceSpeechPart} setNewSpeechPart={setNewSourceSpeechPart}
                newTranscriptions={newSourceTranscriptions} setNewTranscriptions={setNewSourceTranscriptions}
                newSynonyms={newSourceSynonyms} setNewSynonyms={setNewSourceSynonyms}
                newAntonyms={newSourceAntonyms} setNewAntonyms={setNewSourceAntonyms}
                newDefinitions={newSourceDefinitions} setNewDefinitions={setNewSourceDefinitions}
                newExamples={newSourceExamples} setNewExamples={setNewSourceExamples}
            />

            <TableActiveCell
                word={newTargetWord}
                lang={newTargetLang}
                setWord={setNewTargetWord}
                setLang={setNewTargetLang}

                newSpeechPart={newTargetSpeechPart} setNewSpeechPart={setNewTargetSpeechPart}
                newTranscriptions={newTargetTranscriptions} setNewTranscriptions={setNewTargetTranscriptions}
                newSynonyms={newTargetSynonyms} setNewSynonyms={setNewTargetSynonyms}
                newAntonyms={newTargetAntonyms} setNewAntonyms={setNewTargetAntonyms}
                newDefinitions={newTargetDefinitions} setNewDefinitions={setNewTargetDefinitions}
                newExamples={newTargetExamples} setNewExamples={setNewTargetExamples}
            />


            <RowSpace>
                <div className="row-active__buttons">
                    <div className="row-active__button-container" onClick={onSave} >
                        <div className="row-active__save"></div>
                    </div>
                    <div className="row-active__button-container" onClick={() => dispatch(setActiveIndex(''))}>
                        <Cross defaultWhite />
                    </div>
                </div>
            </RowSpace>
        </div>
    )
}

export default TableRowActive