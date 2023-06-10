import { useState } from "react";
import { IBlock } from "../../../interfaces";
import ClickableItem from "../clickable-item/ClickableItem";
import "./Block.scss";


const Block = ({ title, dataList, setDataList, large }: IBlock) => {

    const [value, setValue] = useState<string>('');

    return (
        <div className="block">
            <span className="block__title">{title}</span>
            <div className={`block__items ${large && 'block__items--large'}`}>
                {
                    dataList?.map((item: string, i) => {
                        return (
                            <ClickableItem
                                key={i}
                                index={i}
                                title={item}
                                dataList={dataList}
                                setDataList={setDataList}
                            />
                        )
                    })
                }

                <div className="block__input-wrapper">
                    <input
                        className="block__input"
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={e => {

                            if (e.key === 'Enter') {

                                if (!value.trim()) return;

                                setDataList([...dataList!, value]);
                                setValue('');
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Block