import React from 'react';
import './ComposeEmailTemplate.scss';
import {useDispatch, useSelector} from "react-redux";
import {
  changeStep,
  selectPlaceholdersValue,
  selectPlaceholders,
  changePlaceholderValue
} from './emailTemlaterSlice';

export const SetValues = () => {
  const placeholders = useSelector(selectPlaceholders);
  let placeholdersValue = [...useSelector(selectPlaceholdersValue)];
  const dispatch = useDispatch();

  return (
    <form className="main__form form">
      <div className="form__title">Set Values</div>
      {placeholders.map((placeholder, i) => (
        <label
          key={i}
          className="form__label"
        >
        <span className="form__text">
          {placeholder}
        </span>
          <input
            className="form__input"
            type="email"
            placeholder={placeholder}
            value={placeholdersValue[i]}
            onChange={event => {
              placeholdersValue[i] = event.target.value;
              dispatch(changePlaceholderValue(placeholdersValue));
            }}
          />
        </label>
      ))}
      <div className="form__buttonsBlock">
        <button
          className="form__previousButton button"
          type="button"
          onClick={() => dispatch(changeStep(-1))}
        >
          BACK
        </button>
        <button
          className="form__nextButton button"
          type="button"
          onClick={() => dispatch(changeStep(1))}
        >
          PREVIEW
        </button>
      </div>
    </form>
  )
}
