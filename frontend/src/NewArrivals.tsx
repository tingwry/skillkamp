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

export default function NewArrivals() {
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
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          padding: 60,
        }}
      >
        <h2>New Arrivals</h2>

        <div className="container">
          {products.map((product) => (
            <div className="card">
              <div
                key={product.productName}
                className="card"
                style={{
                  backgroundImage: `url(${product.imgUrl})`,
                  width: "250px",
                  height: "300px",
                }}
              />
              <div className="card">I'm a product</div>
              <button
                className="card modalBtn"
                onClick={() => setOpenDialog(true)}
              >
                Add to Cart
              </button>

              <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <div className="overlay">
                  <div className="modalContainer">
                    <img src={product.imgUrl} alt="" />
                    <div className="modalRight">
                      <p
                        className="closedBtn"
                        onClick={() => setOpenDialog(false)}
                      >
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
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
