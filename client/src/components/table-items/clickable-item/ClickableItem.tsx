import { IBlock } from "../../../interfaces";
import "./ClickableItem.scss";


const ClickableItem = ({ index, title, dataList, setDataList }: IBlock) => {

    const onDelete = () => {
        const newDataList = dataList!.filter((_, i: number) => i !== index);
        setDataList(newDataList)
    }

    return (
        <div className="clickable-item" onClick={onDelete}>
            <span className="clickable-item__data">{title}</span>

            <div className="clickable-item__delete"></div>
        </div>
    )
}

export default ClickableItem