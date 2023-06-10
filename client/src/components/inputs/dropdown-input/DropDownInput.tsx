import { ILanguage, ILanguageDDInputProps } from "../../../interfaces";
import useToggle from "../../../hooks/useToggle";
import { languages } from "../../../languages";
import "./DropDownInput.scss";



const DropDownInput = ({ value, setValue, action, forModal }: ILanguageDDInputProps) => {

    const [isOpen, toggle] = useToggle();

    const filteredLanguages = languages.filter((item: ILanguage) => {
        if (item.name.toLocaleLowerCase().includes(value.name.toLocaleLowerCase()))
            return item;
    })

    return (
        <div className="dropdown-search">
            <input
                type="text"
                className={`dropdown-search__input ${forModal && 'dropdown-search__input--for-modal'}`}
                value={value.name}
                onChange={e => {
                    if (!isOpen) toggle();
                    setValue({ ...value, name: e.target.value })
                }}
                onFocus={toggle}
            />
            <div
                className={`dropdown-search__button ${forModal && 'dropdown-search__button--for-modal'} ${isOpen && 'dropdown-search__button--active'}`}
                onClick={toggle}
            ></div>

            {
                isOpen && <ul className={`dropdown-search__list ${forModal && 'dropdown-search__list--for-modal'}`} >
                    {
                        filteredLanguages.map(item => {
                            return (
                                <li
                                    key={item.name}
                                    className={`dropdown-search__list-item ${forModal && 'dropdown-search__list-item--for-modal'}`}
                                    onClick={() => {
                                        toggle();
                                        setValue(item);
                                        if (action) action(item);
                                    }}
                                >{item.name}</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default DropDownInput 