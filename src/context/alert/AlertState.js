import React, { useReducer } from "react";
import alertContext from "./alertContext";
import { alertReducer } from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../types";
//чтобы все имели доступ к стейту с алертом при использовании его контекста

const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (text, type = "warning") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };

  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <alertContext.Provider
      value={{
        show,
        hide,
        alert: state,
      }}
    >
      {children}
    </alertContext.Provider>
  );
};

export default AlertState;
