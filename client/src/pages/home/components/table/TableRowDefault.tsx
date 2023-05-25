import RowSpace from "../../../../components/row-space/RowSpace";
import { ITableRowDefault } from "../../../../interfaces";


const TableRowDefault = ({ id, sourceWord, targetWord }: ITableRowDefault) => {

    return (
        <div className="row">
            <div className="row__item" onClick={() => { }}>{sourceWord}</div>
            <div className="row__item" onClick={() => { }}>{targetWord}</div>
            <RowSpace />
        </div >
    )
}

export default TableRowDefault