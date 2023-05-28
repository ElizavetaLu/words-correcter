import { useSelector } from "react-redux"; 
import { IActiveTableCell } from "../../../../../interfaces"; 

import WritableBlock from "../../../../../components/table-items/writable-items-block/WritableBlock";
import TinyDDInput from "../../../../../components/inputs/tiny-dropdown-input/TinyDDInput";
import Block from "../../../../../components/table-items/clickable-items-block/Block";
import "./TableActiveCell.scss";


const TableActiveCell = ({
    word,
    lang,
    setWord,
    setLang,

    newSpeechPart, setNewSpeechPart,
    newTranscriptions, setNewTranscriptions,
    newSynonyms, setNewSynonyms,
    newAntonyms, setNewAntonyms,
    newDefinitions, setNewDefinitions,
    newExamples, setNewExamples
}: IActiveTableCell) => {


    const { targetWord } = useSelector((state: any) => state.words.activeWord);

    
    return (
        <div className="cell">
            <div className="cell__word-row">
                <input
                    className="cell__input"
                    value={word}
                    onChange={e => setWord(e.target.value)}
                ></input>
                <TinyDDInput value={lang} setValue={setLang} />
            </div>

            {targetWord !== word &&
                <div className="cell__blocks">
                    <Block title="part of speech" dataList={newSpeechPart} setDataList={setNewSpeechPart!} />
                    <Block title="transcription" dataList={newTranscriptions} setDataList={setNewTranscriptions!} />
                    <Block title="synonyms" dataList={newSynonyms} setDataList={setNewSynonyms!} />
                    <Block title="antonyms" dataList={newAntonyms} setDataList={setNewAntonyms!} />

                    <WritableBlock title="definition" dataList={newDefinitions!} setDataList={setNewDefinitions!} />
                    <WritableBlock title="examples" dataList={newExamples!} setDataList={setNewExamples!} />
                </div >
            }
        </div >
    )
}

export default TableActiveCell