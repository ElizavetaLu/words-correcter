import { useDispatch, useSelector } from "react-redux";
import { IInputWithLabel } from "../../../interfaces";

import Cross from "../../cross-btn/Cross";
import "./InputWithLabel.scss";
import { setAuthError } from "../../../store/actions/actionCreators";


const InputWithLabel = ({ type, name, label, value, onChange, error, resetError }: IInputWithLabel) => {

    const dispatch = useDispatch();
    const { errorMessage } = useSelector((state: any) => state.auth)

    return (
        <div className='field'>
            <label className="field__label" htmlFor={name}>{label}</label>

            <div className="field__input-container">
                <input
                    placeholder=" "
                    className={`field__input ${error && 'field__input--invalid'}`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={e => {
                        if (errorMessage) resetError(errorMessage);
                        if (error) resetError('');
                        dispatch(setAuthError(''))

                        onChange(e.target.value)
                    }}
                />

                <div className="field__clean">
                    {error
                        ? <Cross error action={() => onChange('')} />
                        : <Cross primary action={() => onChange('')} />
                    }
                </div>
            </div>
            {error && <span className="field__error-message">{error}</span>}
        </div>
    )
}

export default InputWithLabel