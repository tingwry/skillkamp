import React from "react";

const Modal = (open: any, onClose: any) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer">
        {/* <img src={} alt='' /> */}
        <h1>My popuppp</h1>
        <div className="modalRight">
          <p onClick={onClose} className="closedBtn">
            X
          </p>
          <div className="content">
            <p>heyhey</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
