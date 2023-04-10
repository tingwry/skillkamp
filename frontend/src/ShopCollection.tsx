import { useEffect, useState } from "react";
import "./Home.css";
import type {} from "@mui/lab/themeAugmentation";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import Product from "./dto/ProductDTO";
import Popup from "./Popup";
import { Link } from "react-router-dom";

function ShopCollection() {
  const [openDialog, setOpenDialog] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await axios.get("http://localhost:4000/products");
    setProducts(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text">Shop Collection</h1>
      <div>
        <div className="shopContainer">
          {products.map((product) => (
            // <Link to={"/products/" + product.productName}>
            <div key={product.productName} className="shopCard">
              <img
                src={product.imgUrl}
                style={{
                  width: "280px",
                }}
              />
              <div className="shopCard">I'm a product</div>

              <button className="shopCard" onClick={() => setOpenDialog(true)}>
                Add to Cart
              </button>
              <Popup
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                productName={product.productName}
              ></Popup>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopCollection;
