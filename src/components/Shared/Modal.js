import React from "react";
import ReactDOM from "react-dom";
import Spinner from './Spinner';
import "./Modal.css";

const Modal = props => {
  const renderActions = () => {
    if (!props.onDecline) {
      return (
        <div className="actions">
          <button className="primary accept" onClick={props.onAgree}>
            OK
          </button>
        </div>
      );
    } else {
      return (
        <div className="actions">
          <button className="primary decline" onClick={props.onDecline}>
            CANCEL
          </button>
          <button className="primary accept" onClick={props.onAgree}>
            OK
          </button>
        </div>
      );
    }
  };

  return ReactDOM.createPortal(
    <div className="modal_container" onClick={props.onDrop}>
      <div className="content" onClick={e => e.stopPropagation()}>
        {props.loading ? (
          <Spinner />
        ) : null}
        {props.error ? (
          <h1 style={{ color: "rgb(240, 82, 43)", fontSize: "1.5rem" }}>{props.error}</h1>
        ) : (
          <h1 style={{ color: "#FFF", fontSize: "1.5rem" }}>{props.message}</h1>
        )}

        {renderActions()}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
