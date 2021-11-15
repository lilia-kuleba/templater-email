import React, { useEffect } from "react";
import './ComposeEmailTemplate.scss';
import {useDispatch} from "react-redux";
import {changeIsFail} from "./emailTemlaterSlice";

export const FailNotification = () => {
  const dispatch = useDispatch();
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      dispatch(changeIsFail(false));
    }, 5000);
  }, [])

  return (
    <div className="sendStatus">
      <div className="sendStatus__container">
        <div className="sendStatus__color sendStatus__color--red"/>
        <div className="sendStatus__title">Failed to send email!</div>
      </div>
      <button
        onClick={() => {
          dispatch(changeIsFail(false));
          clearTimeout(timer);
        }}
        className="sendStatus__button"
      >
        x
      </button>
    </div>
  )
}
