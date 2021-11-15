import React from 'react';
import './ComposeEmailTemplate.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectPlaceholders, selectPlaceholdersValue, sendNewEmail } from './emailTemlaterSlice';
import {
  changeStep,
  selectBody,
  selectRecipients,
  selectSubject
} from "./emailTemlaterSlice";

export const PreviewAndSend = () => {
  const recipients = useSelector(selectRecipients);
  const subject = useSelector(selectSubject);
  const dispatch = useDispatch();
  const placeholders = useSelector(selectPlaceholders);
  const placeholdersValue = useSelector(selectPlaceholdersValue);
  let body = useSelector(selectBody);

  placeholders.forEach((placeholder, i) => body = body.replace(placeholder, placeholdersValue[i] || placeholder));

  return (
    <form className="main__form form">
      <div className="form__title">Preview and Send</div>
      <label className="form__label">
        <span className="form__text">
          Recipients
        </span>
        <input
          className="form__input"
          type="text"
          readOnly
          value={recipients}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          Subject
        </span>
        <input
          className="form__input"
          type="text"
          readOnly
          value={subject}
        />
      </label>
      <label className="form__label">
        <span className="form__text">
          Body
        </span>
        <textarea
          className="form__textarea"
          readOnly
          value={body}
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
          onClick={() => dispatch(sendNewEmail({
            recipients,
            subject,
            body,
          }))}
        >
          SEND
        </button>
      </div>
    </form>
  )
}
