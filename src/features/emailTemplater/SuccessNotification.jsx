import React, { useEffect } from "react";
import './ComposeEmailTemplate.scss';
import {useDispatch} from "react-redux";
import {changeIsSuccess} from "./emailTemlaterSlice";

export const SuccessNotification = () => {
  const dispatch = useDispatch();
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      dispatch(changeIsSuccess(false));
    }, 5000);
  }, [])

  return (
    <div className="sendStatus">
      <div className="sendStatus__container">
        <div className="sendStatus__color sendStatus__color--green"/>
        <div className="sendStatus__title">Email sent successfully!</div>
      </div>
      <button
        onClick={() => {
          dispatch(changeIsSuccess(false));
          clearTimeout(timer);
        }}
        className="sendStatus__button"
      >
        x
      </button>
    </div>
  )
}
