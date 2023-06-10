import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/actions/actionCreators";
import "./Modal.scss";


const Modal = () => {

    const dispatch = useDispatch();
    const { isShown, content } = useSelector((state: any) => state.modal);

    return (
        <div className={`overlay-modal ${isShown ? 'overlay-modal--active' : ''}`} onClick={() => dispatch(setModal())}>
            <div className="modal" onClick={e => e.stopPropagation()}>

                <div className="modal__close" onClick={() => dispatch(setModal())}></div>

                {content}
            </div>
        </div>
    )
}

export default Modal


