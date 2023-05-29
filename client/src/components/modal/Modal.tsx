import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord, showModal } from "../../store/actions/actionCreators";
import "./Modal.scss";


const Modal = () => {

    const dispatch: Dispatch<any> = useDispatch();

    const { isShown, itemIdToDelete } = useSelector((state: any) => state.modal);

    return (
        <div className={isShown ? "modal-overlay modal-overlay--active" : "modal-overlay"} onClick={() => dispatch(showModal())}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal__close" onClick={() => dispatch(showModal())}>
                    <img className="modal__close-icon" src="/images/icons/cross.png" alt="close" />
                </div>
                <p className="modal__message">Are you sure you want to delete this word?</p>

                <div className="modal__buttons">
                    <button
                        className="modal__button modal__button--cancel"
                        onClick={() => dispatch(showModal())}
                    >cancel</button>
                    <button
                        className="modal__button modal__button--delete"
                        onClick={() => {
                            dispatch(deleteWord(itemIdToDelete));
                            dispatch(showModal());
                        }}
                    >delete</button>
                </div>
            </div>
        </div>
    )
}

export default Modal