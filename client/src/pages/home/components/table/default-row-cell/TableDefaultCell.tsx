import { useDispatch } from "react-redux";
import { ITableDefaultCell } from "../../../../../interfaces";
import { setActiveIndex, setModal } from "../../../../../store/actions/actionCreators";

import WordDataContainer from "../../../../../components/modal/word-data-fields/WordDataContainer";
import "./TableDefaultCell.scss";



const TableDefaultCell = ({
    _id,
    word,
    speechPart,
    transcription,
    example,
    definition,
    synonyms,
    antonyms,
    isFullDataShown,
    toggle
}: ITableDefaultCell) => {

    const dispatch = useDispatch();

    return (
        <div className="default-cell" onClick={toggle}>

            <div className="default-cell__row">
                <div className="default-cell__row-word">
                    <p className="default-cell__word">{word}</p>
                    <p className="default-cell__transcription">{transcription}</p>
                </div>

                <div className="default-cell__row-speech">
                    <div className="default-cell__speech-list">
                        {
                            speechPart?.map((item: string, i: number) => (
                                <span className="default-cell__speech-item" key={i}>{
                                    // add comma, if there are more than 1 item
                                    item + (speechPart.length - 1 !== i ? ', ' : '')
                                }</span>
                            ))
                        }
                    </div>
                    <div className={`default-cell__open ${isFullDataShown && 'default-cell__open--active'}`}></div>
                </div>

                <div className="default-cell__edit" onClick={e => {
                    e.stopPropagation();
                    dispatch(setActiveIndex(_id));
                    dispatch(setModal(<WordDataContainer />));
                }}>
                    <img className="default-cell__edit-icon" src="/images/icons/pencil.svg" alt="edit" />
                </div>
            </div>

            {
                isFullDataShown &&

                <>
                    <div >
                        <span className="default-cell__title">Example</span>
                        <div className="default-cell__row-sentences">
                            {
                                example?.map((item: string, i: number) => <p className="default-cell__row-sentence" key={i}>{item}</p>)
                            }
                        </div>
                    </div>

                    <div >
                        <span className="default-cell__title">Definition</span>
                        <div className="default-cell__row-sentences">
                            {
                                definition?.map((item: string, i: number) => <p className="default-cell__row-sentence" key={i}>{item}</p>)
                            }
                        </div>
                    </div>

                    <div>
                        <span className="default-cell__title">Synonyms</span>
                        <div className="default-cell__row-items">
                            {
                                synonyms?.map((item: string, i: number) => <span className="default-cell__row-item" key={i}>{item}</span>)
                            }
                        </div>
                    </div>

                    <div>
                        <span className="default-cell__title">Antonyms</span>
                        <div className="default-cell__row-items">
                            {
                                antonyms?.map((item: string, i: number) => <span className="default-cell__row-item" key={i}>{item}</span>)
                            }
                        </div>
                    </div>


                </>
            }

        </div >
    )
}

export default TableDefaultCell 