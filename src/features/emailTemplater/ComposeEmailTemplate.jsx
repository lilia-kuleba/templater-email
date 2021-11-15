import React from 'react';
import './ComposeEmailTemplate.scss';
import {useDispatch, useSelector} from "react-redux";
import {
  changeBody,
  changeRecipients, changeStep,
  changeSubject,
  selectBody,
  selectRecipients,
  selectStep,
  selectSubject
} from "./emailTemlaterSlice";

export const ComposeEmailTemplate = () => {
  const recipients = useSelector(selectRecipients);
  const subject = useSelector(selectSubject);
  const body = useSelector(selectBody);

  const dispatch = useDispatch();

  return (
    <form className="main__form form">
      <div className="form__title">Compose Email Template</div>
      <label className="form__label">
        <span className="form__text">
          Recipients
        </span>
        <input
          className="form__input"
          type="text"
          placeholder="{recipient}"
          value={recipients}
          onChange={event => {
            dispatch(changeRecipients(event.target.value))
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          Subject
        </span>
        <input
          className="form__input"
          type="text"
          placeholder="{subject}"
          value={subject}
          onChange={event => {
            dispatch(changeSubject(event.target.value))
          }}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          Body
        </span>
        <textarea
          className="form__textarea"
          value={body}
          onChange={event => {
            dispatch(changeBody(event.target.value))
          }}
        />
      </label>
      <button
        className="form__nextButton button"
        type="button"
        onClick={() => dispatch(changeStep(1))}
      >
        SET VARIABLES
      </button>
    </form>
  )
}
