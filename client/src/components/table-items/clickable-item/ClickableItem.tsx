import { IBlock } from "../../../interfaces";
import "./ClickableItem.scss"; 


const ClickableItem = ({ title, dataList, setDataList }: IBlock) => {

    const onDelete = () => {
        const newDataList = dataList!.filter(item => item !== title);
        setDataList(newDataList)
    }

    return (
        <div className="clickable-item" onClick={onDelete}>
            <span className="clickable-item__data">{title}</span>

            <div className="clickable-item__delete">
                <img className="clickable-item__delete-icon" src="/images/icons/cross.png" alt="delete" /> 
            </div>
        </div>
    )
}

export default ClickableItem