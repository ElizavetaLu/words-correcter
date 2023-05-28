import { useState } from "react";
import { IBlock } from "../../../interfaces";
import "./WritableBlock.scss";


const WritableBlock = ({ title, dataList, setDataList }: IBlock) => {

    const [newSentence, setNewSentence] = useState<string>('');
    

    return (
        <div className="writable-block">
            <span className="writable-block__title">{title}</span>

            <div className="writable-block__items">
                {
                    dataList && dataList.length > 0 && dataList.map((sentence: string, i) => {
                        return (
                            <div key={sentence} className="writable-block__item">
                                <textarea
                                    className="writable-block__textarea"
                                    value={sentence} 
                                    disabled
                                ></textarea>

                                <div className="writable-block__icon">
                                    <img
                                        className="writable-block__delete"
                                        src="/images/icons/trashbin.png"
                                        alt="delete"
                                        onClick={() => {
                                            const newDataList = dataList.filter((item: any) => item !== sentence);
                                            setDataList(newDataList)
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }


                <div className="writable-block__item">
                    <textarea
                        className="writable-block__textarea"
                        value={newSentence}
                        onChange={e => setNewSentence(e.target.value)}
                    ></textarea>
                    <div
                        className="writable-block__icon"
                        onClick={() => {
                            setDataList!([...dataList!, newSentence]);
                            setNewSentence('');
                        }}>

                        <div className="writable-block__plus">
                            <span className="writable-block__line"></span>
                            <span className="writable-block__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritableBlock