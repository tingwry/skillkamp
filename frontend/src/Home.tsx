import { useEffect, useState } from "react";
import "./Home.css";

const picsUrl = [
  "https://drive.google.com/uc?export=view&id=1yaeEClFdnfEyyPRDjGWSz1dDQOnVMOI2",
  "https://drive.google.com/uc?export=view&id=1BPpzxpj5DfmlFybMf8Chgc889Iq99BLs",
  "https://drive.google.com/uc?export=view&id=1ME6uqQgplJmv09NKjEGC4YYLb-o9xHnt",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (index == picsUrl.length ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // <>
    //   <div
    //     style={{
    //       backgroundImage: `url(${picsUrl[index]})`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "contain",
    //       height: "contain",
    //       width: "contain%",
    //     }}
    //   >
    //     Hello
    //   </div>
    //   {/* <img src={picsUrl[index]} /> */}
    // </>
    <>
      <div
        className="CoverImg"
        style={{ backgroundImage: `url(${picsUrl[index]})` }}
      >
        <h1 className="text">Hello</h1>
      </div>
    </>
  );
}
