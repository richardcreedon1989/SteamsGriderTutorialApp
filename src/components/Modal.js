import React from "react";
import ReactDOM from "react-dom"; // as modal is portal and not under root dom - need to import this

// created div in index.html to attach the modal too -
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        onClick={(e) => e.stopPropagation()} //if click on child element, event will bubble up so it will do the history.push above unless have this function
        className="ui standard modal visible active"
      >
        <div className="header"> {props.title} </div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

//second argument refereence to HTML element - "modal"
export default Modal;
