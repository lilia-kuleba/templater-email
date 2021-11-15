import React from 'react';
import './ComposeEmailTemplate.scss';
import {useDispatch, useSelector} from "react-redux";
import {
  changeDate,
  changeLocation,
  changeName,
  changeRecipients,
  changeSignature,
  changeStep,
  changeSubject,
  selectDate,
  selectLocation,
  selectName,
  selectRecipients,
  selectSignature,
  selectSubject
} from "./emailTemlaterSlice";

export const SetValues = () => {
  const recipients = useSelector(selectRecipients);
  const subject = useSelector(selectSubject);
  const date = useSelector(selectDate);
  const location = useSelector(selectLocation);
  const name = useSelector(selectName);
  const signature = useSelector(selectSignature);
  const dispatch = useDispatch();

  return (
    <form className="main__form form">
      <div className="form__title">Set Values</div>
      <label className="form__label">
        <span className="form__text">
          {"{recipients}"}
        </span>
        <input
          className="form__input"
          type="email"
          placeholder="{recipient}"
          value={recipients}
          onChange={event => {
            dispatch(changeRecipients(event.target.value));
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          {"{subject}"}
        </span>
        <input
          className="form__input"
          type="text"
          placeholder="{subject}"
          value={subject}
          onChange={event => {
            dispatch(changeSubject(event.target.value));
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          {"{date}"}
        </span>
        <input
          className="form__input"
          type="date"
          placeholder="{date}"
          value={date}
          onChange={event => {
            dispatch(changeDate(event.target.value));
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          {"{location}"}
        </span>
        <input
          className="form__input"
          type="text"
          placeholder="{location}"
          value={location}
          onChange={event => {
            dispatch(changeLocation(event.target.value));
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          {"{name}"}
        </span>
        <input
          className="form__input"
          type="text"
          placeholder="{name}"
          value={name}
          onChange={event => {
            dispatch(changeName(event.target.value));
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          {"{signature}"}
        </span>
        <input
          className="form__input"
          type="text"
          placeholder="{signature}"
          value={signature}
          onChange={event => {
            dispatch(changeSignature(event.target.value));
          }}
        />
      </label>
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
