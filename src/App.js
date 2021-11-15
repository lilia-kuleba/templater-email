import React from 'react';
import './App.scss';
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectIsFail, selectIsSuccess, selectStep} from "./features/emailTemplater/emailTemlaterSlice";
import {ComposeEmailTemplate} from "./features/emailTemplater/ComposeEmailTemplate";
import {SetValues} from "./features/emailTemplater/SetValues";
import {PreviewAndSend} from "./features/emailTemplater/PreviewAndSend";
import {SuccessNotification} from "./features/emailTemplater/SuccessNotification";
import {FailNotification} from "./features/emailTemplater/FailNotification";

function App() {
  const step = useSelector(selectStep);
  const isSuccess = useSelector(selectIsSuccess);
  const isFail = useSelector(selectIsFail);

  return (
    <div className="App">
      <header className="App__header header">
        <div className="header__logo">ET</div>
        <div className="header__title">Email Templater</div>
      </header>
      <main className="App__main main">
        <ul className="main__statusEmail statusEmail">
          <li className={classNames(
            "statusEmail__item",
            "statusEmail__item--1",
            {"statusEmail__item--active": step === 1}
          )}>
            1
          </li>
          <li className={classNames(
            "statusEmail__item",
            "statusEmail__item--2",
            {"statusEmail__item--active": step === 2}
          )}>
            2
          </li>
          <li className={classNames(
            "statusEmail__item",
            "statusEmail__item--3",
            {"statusEmail__item--active": step === 3}
          )}>
            3
          </li>
        </ul>
        {step === 1 && <ComposeEmailTemplate/>}
        {step === 2 && <SetValues/>}
        {step === 3 && <PreviewAndSend/>}
        <div className="main__status">
          {isSuccess && <SuccessNotification/>}
          {isFail && <FailNotification/>}
        </div>
      </main>
    </div>
  );
}

export default App;
