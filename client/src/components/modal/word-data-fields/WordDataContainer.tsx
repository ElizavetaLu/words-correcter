import { Dispatch, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILanguage, IWordDataContainer, IWordsData } from "../../../interfaces";
import { addBrandNewWord, setActiveIndex, setCorrectedWord } from "../../../store/actions/actionCreators";
import useToggle from "../../../hooks/useToggle";

import WordData from "./word-data/WordData";
import "./WordDataContainer.scss";




const WordDataContainer = ({ isNew, toggleModal }: IWordDataContainer) => {

    const dispatch: Dispatch<any> = useDispatch();

    const [isSourceWordActive, toggle] = useToggle();

    const { activeItemId, words, sourceLang, targetLang } = useSelector((state: any) => state.words);


    const wordData = words.find((item: IWordsData) => item._id === activeItemId);


    const [newSourceWord, setNewSourceWord] = useState<string>('');
    const [newSourceLang, setNewSourceLang] = useState<ILanguage>(sourceLang);

    const [newSourceSpeechPart, setNewSourceSpeechPart] = useState<string[]>([]);
    const [newSourceTranscription, setNewSourceTranscription] = useState<string>('');
    const [newSourceSynonyms, setNewSourceSynonyms] = useState<string[]>([]);
    const [newSourceAntonyms, setNewSourceAntonyms] = useState<string[]>([]);
    const [newSourceDefinitions, setNewSourceDefinitions] = useState<string[]>([]);
    const [newSourceExamples, setNewSourceExamples] = useState<string[]>([]);


    const [newTargetWord, setNewTargetWord] = useState<string>('');
    const [newTargetLang, setNewTargetLang] = useState<ILanguage>(targetLang);

    const [newTargetSpeechPart, setNewTargetSpeechPart] = useState<string[]>([]);
    const [newTargetTranscription, setNewTargetTranscription] = useState<string>('');
    const [newTargetSynonyms, setNewTargetSynonyms] = useState<string[]>([]);
    const [newTargetAntonyms, setNewTargetAntonyms] = useState<string[]>([]);
    const [newTargetDefinitions, setNewTargetDefinitions] = useState<string[]>([]);
    const [newTargetExamples, setNewTargetExamples] = useState<string[]>([]);

    useEffect(() => {

        //update modal data when the word was selected
        if (activeItemId && wordData)  {
            const {
                sourceWord,
                sourceLang,
                sourceSpeechPart,
                sourceTranscription,
                sourceSynonyms,
                sourceAntonyms,
                sourceDefinitions,
                sourceExamples,

                targetWord,
                targetLang,
                targetSpeechPart,
                targetTranscription,
                targetSynonyms,
                targetAntonyms,
                targetDefinitions,
                targetExamples
            } = wordData


            setNewSourceWord(isNew ? '' : sourceWord);
            setNewSourceLang(sourceLang);
            setNewSourceSpeechPart(isNew ? [] : sourceSpeechPart);
            setNewSourceTranscription(sourceTranscription);
            setNewSourceSynonyms(isNew ? [] : sourceSynonyms);
            setNewSourceAntonyms(isNew ? [] : sourceAntonyms);
            setNewSourceDefinitions(isNew ? [] : sourceDefinitions);
            setNewSourceExamples(isNew ? [] : sourceExamples);

            setNewTargetWord(isNew ? '' : targetWord);
            setNewTargetLang(targetLang);
            setNewTargetSpeechPart(isNew ? [] : targetSpeechPart);
            setNewTargetTranscription(targetTranscription);
            setNewTargetSynonyms(isNew ? [] : targetSynonyms);
            setNewTargetAntonyms(isNew ? [] : targetAntonyms);
            setNewTargetDefinitions(isNew ? [] : targetDefinitions);
            setNewTargetExamples(isNew ? [] : targetExamples);
        }
    }, [wordData, activeItemId])



    const onSave = () => {

        if (newSourceWord) return
        if (newTargetWord) return

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


        //clean up all fields
        setNewSourceWord('');
        setNewSourceLang(sourceLang);
        setNewSourceSpeechPart([]);
        setNewSourceTranscription('');
        setNewSourceSynonyms([]);
        setNewSourceAntonyms([]);
        setNewSourceDefinitions([]);
        setNewSourceExamples([]);
        setNewSourceWord('');

        setNewTargetWord('');
        setNewTargetLang(targetLang);
        setNewTargetSpeechPart([]);
        setNewTargetTranscription('');
        setNewTargetSynonyms([]);
        setNewTargetAntonyms([]);
        setNewTargetDefinitions([]);
        setNewTargetExamples([]);


        toggleModal();
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