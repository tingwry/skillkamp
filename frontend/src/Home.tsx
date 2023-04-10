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
import Modal from "./Modal";

const picsUrl = [
  "https://drive.google.com/uc?export=view&id=1yaeEClFdnfEyyPRDjGWSz1dDQOnVMOI2",
  "https://drive.google.com/uc?export=view&id=1BPpzxpj5DfmlFybMf8Chgc889Iq99BLs",
  "https://drive.google.com/uc?export=view&id=1ME6uqQgplJmv09NKjEGC4YYLb-o9xHnt",
];

const products = [
  "https://drive.google.com/uc?export=view&id=1yFSF-g7fxuPL9K5SyDwkAVCPt0pkhGHG",
  "https://drive.google.com/uc?export=view&id=1V6wwyqiebKp0UwB3eyTOrI0YIsM0n4VY",
  "https://drive.google.com/uc?export=view&id=1jB6FZZ4CT_g0cpm9jpzY7XE3wulf3DHf",
  "https://drive.google.com/uc?export=view&id=1yA1ENqSjHD76ut9uYPWFaCzvxS6wqsZp",
  "https://drive.google.com/uc?export=view&id=1vMThtb1kPTeT71mTqwEsW6fKYQeEUq5m",
  "https://drive.google.com/uc?export=view&id=10t9vMpl9qO5YlboPNzXpCwH5uD5xfN3P",
  "https://drive.google.com/uc?export=view&id=18DQvWCKOy-QAqyV2p8IZoJ2JgpCgMnM-",
  "https://drive.google.com/uc?export=view&id=1kzgO1ri-SjbK0QR5nvsQ8zoiZIHv8lKu",
  "https://drive.google.com/uc?export=view&id=16QcTro8DnR1JUEothBB8pouQGCXK4BX6",
  "https://drive.google.com/uc?export=view&id=1Vkd3Fb7XXGcu2Wqhe6QpZjGUSV9kHzPh",
  "https://drive.google.com/uc?export=view&id=1CliRX5SQm-8xVGghoFuW7JCz3ITnXVWo",
  "https://drive.google.com/uc?export=view&id=19K-L7AbipMtbXQCVANxAHlJ0xy-wUbUH",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (index == picsUrl.length ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="CoverImg"
        style={{ backgroundImage: `url(${picsUrl[index]})` }}
      >
        <h1 className="text">Hello</h1>
      </div>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          padding: 60,
        }}
      >
        <h2>New Arrivals</h2>
        <div className="container">
          {products.map((src) => (
            <div className="card">
              <div
                key={src}
                className="card"
                style={{
                  backgroundImage: `url(${src})`,
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
              {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
              <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                {/* <Button
                  className="closedBtn"
                  onClick={() => setOpenDialog(false)}
                >
                  X
                </Button>
                <DialogTitle>I'm a product</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    A dialog is a popup window
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)}>OK</Button>
                </DialogActions> */}
                <div className="overlay">
                  <div className="modalContainer">
                    <img src={src} alt="" />
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
