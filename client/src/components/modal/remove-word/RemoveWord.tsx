import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../../../store/actions/actionCreators";
import "./RemoveWord.scss";


const RemoveWord = ({ toggle }: { toggle: () => void }) => {

    const dispatch: Dispatch<any> = useDispatch();

    const { itemIdToDelete } = useSelector((state: any) => state.modal);

    return (
        <div className="remove-word">
            <p className="remove-word__message">Are you sure you want to delete this word?</p>

            <div className="remove-word__buttons">

                <button
                    className="remove-word__button remove-word__button--cancel"
                    onClick={toggle}
                >cancel
                </button>

                <button
                    className="remove-word__button remove-word__button--delete"
                    onClick={() => {
                        dispatch(deleteWord(itemIdToDelete));
                        toggle();
                    }}
                >delete</button>

            </div>
        </div>
    )
}

export default RemoveWord