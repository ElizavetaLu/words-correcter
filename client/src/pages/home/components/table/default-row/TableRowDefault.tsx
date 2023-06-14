import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setItemIdToDelete } from "../../../../../store/actions/actionCreators";
import { IWordsData } from "../../../../../interfaces";

import RowSpace from "../../../../../components/row-space/RowSpace";
import TableDefaultCell from "../default-row-cell/TableDefaultCell";
import useToggle from "../../../../../hooks/useToggle";
import "./TableRowDefault.scss";


const TableRowDefault = ({
    _id,
    sourceWord,
    targetWord,

    sourceSpeechPart,
    sourceTranscription,
    sourceSynonyms,
    sourceAntonyms,
    sourceDefinitions,
    sourceExamples,

    targetSpeechPart,
    targetTranscription,
    targetSynonyms,
    targetAntonyms,
    targetDefinitions,
    targetExamples,

    toggleDeleteModal,
    toggleUpdateModal
}: IWordsData) => {



    const dispatch: Dispatch<any> = useDispatch();
    const [isFullDataShown, toggle] = useToggle();

    return (
        <div className="row">
            <TableDefaultCell
                _id={_id}
                word={sourceWord}
                speechPart={sourceSpeechPart}
                transcription={sourceTranscription}
                example={sourceExamples}
                definition={sourceDefinitions}
                synonyms={sourceSynonyms}
                antonyms={sourceAntonyms}

                isFullDataShown={isFullDataShown}
                toggle={toggle}

                toggleUpdateModal={toggleUpdateModal}
            />
            <TableDefaultCell
                _id={_id}
                word={targetWord}
                speechPart={targetSpeechPart}
                transcription={targetTranscription}
                example={targetExamples}
                definition={targetDefinitions}
                synonyms={targetSynonyms}
                antonyms={targetAntonyms}

                isFullDataShown={isFullDataShown}
                toggle={toggle}

                toggleUpdateModal={toggleUpdateModal}
            />

            <RowSpace>
                <div className="row__delete" onClick={() => {
                    dispatch(setItemIdToDelete(_id));
                    toggleDeleteModal()
                }}>
                    <img className="row__delete-icon" src="/images/icons/trashbin.png" alt="delete" />
                </div>
            </RowSpace>
        </div>
    )
}

export default TableRowDefault