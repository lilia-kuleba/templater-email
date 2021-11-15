import React, { useEffect } from 'react';
import './ComposeEmailTemplate.scss';
import {useDispatch, useSelector} from "react-redux";
import {
  addPlaceholder,
  changeBody, changePlaceholderValue,
  changeRecipients, changeStep,
  changeSubject,
  selectBody,
  selectRecipients,
  selectSubject
} from './emailTemlaterSlice';

export const ComposeEmailTemplate = () => {
  const recipients = useSelector(selectRecipients);
  const subject = useSelector(selectSubject);
  const body = useSelector(selectBody);

  const dispatch = useDispatch();

  useEffect(() => {
    filterPlaceholders();
  }, [body])

  const filterPlaceholders = () => {
    const regex = /^[-_a-zA-Z0-9{}]+$/;
    const placeholders = body
      .replace(/(\r\n|\n|\r)/gm, " ")
      .replace(/[.,\s]/g, ' ')
      .split(' ')
      .filter(placeholder => {
        if ((placeholder[0] !== '{' || placeholder[placeholder.length - 1] !== '}')) return false;

        return regex.test(placeholder);
      })

    const arr = new Array(placeholders.length);
    dispatch(changePlaceholderValue(arr.fill('')));
    dispatch(addPlaceholder(placeholders));
  }

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
            dispatch(changeBody(event.target.value));
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
