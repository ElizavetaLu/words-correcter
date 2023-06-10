import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILanguage, IWordsData } from "../../../interfaces";
import useToggle from "../../../hooks/useToggle";
import { addBrandNewWord, setActiveIndex, setCorrectedWord, setModal } from "../../../store/actions/actionCreators";

import WordData from "./word-data/WordData";
import "./WordDataContainer.scss";


type TWordDataContainer = {
    isNew?: boolean
}

const WordDataContainer = ({ isNew }: TWordDataContainer) => {

    const dispatch: Dispatch<any> = useDispatch();

    const [isSourceWordActive, toggle] = useToggle();

    const { activeItemId, words, sourceLang, targetLang } = useSelector((state: any) => state.words);

    const wordData = words.find((item: IWordsData) => item._id === activeItemId);


    const [newSourceWord, setNewSourceWord] = useState<string>(isNew ? '' : wordData?.sourceWord);
    const [newSourceLang, setNewSourceLang] = useState<ILanguage>(isNew ? sourceLang : wordData?.sourceLang);

    const [newSourceSpeechPart, setNewSourceSpeechPart] = useState<string[]>(isNew ? [] : wordData?.sourceSpeechPart);
    const [newSourceTranscription, setNewSourceTranscription] = useState<string>(isNew ? '' : wordData?.sourceTranscriptions);
    const [newSourceSynonyms, setNewSourceSynonyms] = useState<string[]>(isNew ? [] : wordData?.sourceSynonyms);
    const [newSourceAntonyms, setNewSourceAntonyms] = useState<string[]>(isNew ? [] : wordData?.sourceAntonyms);
    const [newSourceDefinitions, setNewSourceDefinitions] = useState<string[]>(isNew ? [] : wordData?.sourceDefinitions);
    const [newSourceExamples, setNewSourceExamples] = useState<string[]>(isNew ? [] : wordData?.sourceExamples);


    const [newTargetWord, setNewTargetWord] = useState<string>(isNew ? '' : wordData?.targetWord);
    const [newTargetLang, setNewTargetLang] = useState<ILanguage>(isNew ? targetLang : wordData?.targetLang);

    const [newTargetSpeechPart, setNewTargetSpeechPart] = useState<string[]>(isNew ? [] : wordData?.targetSpeechPart);
    const [newTargetTranscription, setNewTargetTranscription] = useState<string>(isNew ? '' : wordData?.targetTranscriptions);
    const [newTargetSynonyms, setNewTargetSynonyms] = useState<string[]>(isNew ? [] : wordData?.targetSynonyms);
    const [newTargetAntonyms, setNewTargetAntonyms] = useState<string[]>(isNew ? [] : wordData?.targetAntonyms);
    const [newTargetDefinitions, setNewTargetDefinitions] = useState<string[]>(isNew ? [] : wordData?.targetDefinitions);
    const [newTargetExamples, setNewTargetExamples] = useState<string[]>(isNew ? [] : wordData?.targetExamples);



    const onSave = () => {

        const wordData = {
            sourceLang: newSourceLang,
            sourceWord: newSourceWord,
            targetLang: newTargetLang,
            targetWord: newTargetWord,

            sourceSpeechPart: newSourceSpeechPart,
            sourceTranscription: newSourceTranscription,
            sourceSynonyms: newSourceSynonyms,
            sourceAntonyms: newSourceAntonyms,
            sourceDefinitions: newSourceDefinitions,
            sourceExamples: newSourceExamples,

            targetSpeechPart: newTargetSpeechPart,
            targetTranscription: newTargetTranscription,
            targetSynonyms: newTargetSynonyms,
            targetAntonyms: newTargetAntonyms,
            targetDefinitions: newTargetDefinitions,
            targetExamples: newTargetExamples,

            id: activeItemId
        };

        if (isNew) {
            dispatch(addBrandNewWord(wordData));
        } else {
            dispatch(setCorrectedWord(wordData));
        }

        dispatch(setModal());
        dispatch(setActiveIndex(''));
    }


    return (
        <div className="word-data-container">
            <h5 className="word-data-container__title">Edit</h5>

            <div className="word-data-container__buttons">
                <button className={`word-data-container__button ${!isSourceWordActive ? 'word-data-container__button--active' : ''}`} onClick={toggle}>Word</button>
                <button className={`word-data-container__button ${!isSourceWordActive ? '' : 'word-data-container__button--active'}`} onClick={toggle}>Translate</button>
            </div>


            {!isSourceWordActive

                ? <WordData
                    word={newSourceWord}
                    lang={newSourceLang}
                    setWord={setNewSourceWord}
                    setLang={setNewSourceLang}

                    newSpeechPart={newSourceSpeechPart} setNewSpeechPart={setNewSourceSpeechPart}
                    newTranscription={newSourceTranscription} setNewTranscription={setNewSourceTranscription}
                    newSynonyms={newSourceSynonyms} setNewSynonyms={setNewSourceSynonyms}
                    newAntonyms={newSourceAntonyms} setNewAntonyms={setNewSourceAntonyms}
                    newDefinitions={newSourceDefinitions} setNewDefinitions={setNewSourceDefinitions}
                    newExamples={newSourceExamples} setNewExamples={setNewSourceExamples}
                />

                : <WordData
                    word={newTargetWord}
                    lang={newTargetLang}
                    setWord={setNewTargetWord}
                    setLang={setNewTargetLang}

                    newSpeechPart={newTargetSpeechPart} setNewSpeechPart={setNewTargetSpeechPart}
                    newTranscription={newTargetTranscription} setNewTranscription={setNewTargetTranscription}
                    newSynonyms={newTargetSynonyms} setNewSynonyms={setNewTargetSynonyms}
                    newAntonyms={newTargetAntonyms} setNewAntonyms={setNewTargetAntonyms}
                    newDefinitions={newTargetDefinitions} setNewDefinitions={setNewTargetDefinitions}
                    newExamples={newTargetExamples} setNewExamples={setNewTargetExamples}
                />
            }

            <div className="word-data-container__save-container">
                <button className="word-data-container__save" onClick={onSave}>{
                    isNew ? 'Add new word' : 'Save'
                }</button>
            </div>
        </div>
    )
}

export default WordDataContainer 