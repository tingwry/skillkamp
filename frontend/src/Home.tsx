import { useEffect, useState } from "react";
import "./Home.css";
import type {} from "@mui/lab/themeAugmentation";
import NewArrivals from "./NewArrivals";
import { Link } from "react-router-dom";

const picsUrl = [
  "https://drive.google.com/uc?export=view&id=1yaeEClFdnfEyyPRDjGWSz1dDQOnVMOI2",
  "https://drive.google.com/uc?export=view&id=1BPpzxpj5DfmlFybMf8Chgc889Iq99BLs",
  "https://drive.google.com/uc?export=view&id=1ME6uqQgplJmv09NKjEGC4YYLb-o9xHnt",
];

export default function Home(props: any) {
  const { setTab } = props;
  const [index, setIndex] = useState(0);

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
        {index == 0 && (
          <>
            <h1 className="text">NEW COLLECTION</h1>{" "}
            <button onClick={() => setTab("2")}>Shop Now</button>
          </>
        )}
      </div>
      <NewArrivals />

      <div className="center">
        <button onClick={() => setTab("2")}>Shop All</button>
      </div>
    </>
  );
}
