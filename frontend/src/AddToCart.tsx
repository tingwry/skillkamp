import React, { ComponentProps } from "react";

function AddToCart(props: ComponentProps) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddToCart;
