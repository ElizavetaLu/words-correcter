import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/actions/actionCreators";
import "./Modal.scss";


const Modal = ({ children, isShown, toggle }: { children: ReactNode, isShown: boolean, toggle: () => void }) => {

    const dispatch = useDispatch();
    // const { isShown } = useSelector((state: any) => state.modal);

    return (
        <div className={`overlay-modal ${isShown ? 'overlay-modal--active' : ''}`} onClick={toggle}>
            <div className="modal" onClick={e => e.stopPropagation()}>

                <div className="modal__close" onClick={toggle}></div>

                {children}
            </div>
        </div>
    )
}

export default Modal


