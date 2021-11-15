import React from 'react';
import './ComposeEmailTemplate.scss';
import { useDispatch, useSelector } from "react-redux";
import { sendNewEmail } from "./emailTemlaterSlice";
import {
  changeBody,
  changeRecipients,
  changeStep,
  changeSubject,
  selectBody,
  selectDate,
  selectLocation,
  selectName,
  selectRecipients,
  selectSignature,
  selectSubject
} from "./emailTemlaterSlice";

export const PreviewAndSend = () => {
  const recipients = useSelector(selectRecipients);
  const subject = useSelector(selectSubject);
  const date = useSelector(selectDate);
  const location = useSelector(selectLocation);
  const name = useSelector(selectName);
  const signature = useSelector(selectSignature);
  const dispatch = useDispatch();
  const body = useSelector(selectBody)
    .replace('{name}', name)
    .replace('{subject}', subject)
    .replace('{date}', date)
    .replace('{location}', location)
    .replace('{signature}', signature)

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
