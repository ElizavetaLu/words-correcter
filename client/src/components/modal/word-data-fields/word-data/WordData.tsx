 import { IEditWordData } from "../../../../interfaces";
 
import DropDownInput from "../../../inputs/dropdown-input/DropDownInput";
import Block from "../../../table-items/clickable-items-block/Block";
import WritableBlock from "../../../table-items/writable-items-block/WritableBlock";
import "./WordData.scss"; 


const WordData = ({
    word,
    lang,
    setWord,
    setLang,

    newSpeechPart, setNewSpeechPart,
    newTranscription, setNewTranscription,
    newSynonyms, setNewSynonyms,
    newAntonyms, setNewAntonyms,
    newDefinitions, setNewDefinitions,
    newExamples, setNewExamples
}: IEditWordData) => {
 
    
    return (

        <div className="word-data">

            <DropDownInput value={lang} setValue={setLang} forModal />

            <div className="word-data__row">
              <label className="word-data__label" htmlFor="word">
                    word
                    <input
                        className="word-data__label-input"
                        type="text"
                        name="word"
                        value={word}
                        onChange={e => setWord(e.target.value)}
                    />
                </label>  
              <label className="word-data__label" htmlFor="transcription">
                    transcription
                    <input
                        className="word-data__label-input"
                        type="text"
                        name="transcription"
                        value={newTranscription}
                        onChange={e => setNewTranscription!(e.target.value)}
                    />
                </label>  
            </div>


            <div className="word-data__rows">
                <Block title="part of speech" dataList={newSpeechPart!} setDataList={setNewSpeechPart!} />
                <Block title="synonyms" dataList={newSynonyms!} setDataList={setNewSynonyms!} large />
                <Block title="antonyms" dataList={newAntonyms!} setDataList={setNewAntonyms!} large />
                <WritableBlock title="definition" dataList={newDefinitions!} setDataList={setNewDefinitions!} />
                <WritableBlock title="examples" dataList={newExamples!} setDataList={setNewExamples!} />

            </div>
        </div>
    )
}

export default WordData 