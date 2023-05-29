import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setActiveIndex, setItemIdToDelete, showModal } from "../../../../../store/actions/actionCreators";
import { ITableRowDefault } from "../../../../../interfaces";

import RowSpace from "../../../../../components/row-space/RowSpace";
import "./TableRowDefault.scss";


const TableRowDefault = ({ _id, sourceWord, targetWord }: ITableRowDefault) => {

    const dispatch: Dispatch<any> = useDispatch();

    return (
        <div className="row">
            <div className="row__item" onClick={() => dispatch(setActiveIndex(_id))}>{sourceWord}</div>
            <div className="row__item" onClick={() => dispatch(setActiveIndex(_id))}>{targetWord}</div>

            <RowSpace>
                <div className="row__delete" onClick={() => {
                    dispatch(setItemIdToDelete(_id));
                    dispatch(showModal());
                }}>
                    <img className="row__delete-icon" src="/images/icons/trashbin.png" alt="delete" />
                </div>
            </RowSpace>
        </div>
    )
}

export default TableRowDefault