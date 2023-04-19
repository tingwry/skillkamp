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
import { useEffect, useReducer, useState } from "react";
import Product from "./dto/ProductDTO";
import { Link, useNavigate } from "react-router-dom";

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
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      size: "",
      quantity: "",
    }
  );

  const navigate = useNavigate();

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSizeVal(event.target.value);
  };
  const handleQuanChange = (event: SelectChangeEvent) => {
    setQuanVal(event.target.value);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const jsonData = {
      size: data.get("size"),
      quantity: data.get("quantity"),
    };

    const token = localStorage.getItem("token");
    fetch("http://localhost:4000/cart/" + product?.productName, {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
        // crossDomain: true,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token || "",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Add to cart failed.");
        console.error("Error:", error);
      });
  };

  const handleInput = (evt: any) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

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
            <form onSubmit={handleSubmit}>
              <p>Size</p>
              <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                <InputLabel id="size-select-label">Size</InputLabel>
                <Select
                  name="size"
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
              <input name="quantity" type="number" min="1" defaultValue="1" />

              <button type="submit" id="submit">
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
