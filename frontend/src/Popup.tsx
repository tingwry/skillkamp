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

import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./dto/ProductDTO";
import InputSpinner from "react-native-input-spinner";

interface PopupProps {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  product: Product | null;
}

function Popup(props: PopupProps) {
  const { openDialog, setOpenDialog, product } = props;

  // size + quantity
  const [sizeVal, setSizeVal] = useState("");
  const [quanVal, setQuanVal] = useState("");

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSizeVal(event.target.value);
  };
  const handleQuanChange = (event: SelectChangeEvent) => {
    setQuanVal(event.target.value);
  };

  // const { productName } = useParams();

  // const [product, setProduct] = useState<Product>();

  // async function fetchProduct() {
  //   const res = await axios.get(
  //     "http://localhost:4000/products/" + { productName }
  //   );
  //   setProduct(res.data);
  // }

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  if (product == null) return null;
  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="md"
    >
      <DialogContent>
        <div className="modalContainer">
          <div className="modalCard">
            <img src={product?.imgUrl} />
          </div>
          <div className="modalCard">
            <h2>I'm a product</h2>
            <h3>{product.price}</h3>
            <p>Size</p>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
              <InputLabel id="size-select-label">Size</InputLabel>
              <Select
                labelId="size-select-label"
                id="size-select"
                value={sizeVal}
                label="Size"
                onChange={handleSizeChange}
              >
                <MenuItem value={"12-18 months"}>12-18 months</MenuItem>
                <MenuItem value={"18-24 months"}>18-24 months</MenuItem>
                <MenuItem value={"2 years"}>2 years</MenuItem>
                <MenuItem value={"3 years"}>3 years</MenuItem>
                {/* ... */}
              </Select>
            </FormControl>
            <p>Quantity</p>
            <form>
              <input type="number" min="1" defaultValue="1" />
            </form>
            <button
            // onClick={}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
