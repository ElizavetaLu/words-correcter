import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setActiveIndex, setActiveWord } from "../../../../../store/actions/actionCreators";

import RowSpace from "../../../../../components/row-space/RowSpace"; 
import "./TableRowDefault.scss";


const TableRowDefault = (props: any) => {
 
    const dispatch: Dispatch<any> = useDispatch();

    return (
        <div className="row">
            <div className="row__item" onClick={() => {

                dispatch(setActiveWord(props))
                dispatch(setActiveIndex(props._id))
            }}>{props.sourceWord}</div>
            <div className="row__item" onClick={() => {

                dispatch(setActiveWord(props))
                dispatch(setActiveIndex(props._id))
            }}>{props.targetWord}</div>
            <RowSpace />
        </div>
    )
}

export default TableRowDefault