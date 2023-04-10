// import React from "react";

// function Popup() {
//   return (
//     <div onClick={onClose} className="overlay">
//       <div className="modalContainer">
//         {/* <img src={} alt='' /> */}
//         <h1>My popuppp</h1>
//         <div className="modalRight">
//           <p onClick={onClose} className="closedBtn">
//             X
//           </p>
//           <div className="content">
//             <p>heyhey</p>
//           </div>
//           <div className="btnContainer">
//             <button className="btnPrimary">
//               <span className="bold">YES</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./dto/ProductDTO";
// import { useParams } from "react-router-dom";

function Popup(props: any) {
  const { openDialog, setOpenDialog, productName } = props;
  // const { productName } = useParams();

  const [product, setProduct] = useState<Product>();

  async function fetchProduct() {
    const res = await axios.get(
      "http://localhost:4000/products/" + { productName }
    );
    setProduct(res.data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Dialog open={openDialog} maxWidth="md">
      <DialogTitle>
        <div>title</div>
      </DialogTitle>
      <DialogContent>
        <div>
          <div>
            <p>{productName}</p>
            <img src={product?.imgUrl} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
