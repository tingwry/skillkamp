import { TabPanel, TabContext, TabList } from "@mui/lab";
import type {} from "@mui/lab/themeAugmentation";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./auth/Signup";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Home from "./Home";
import OurStory from "./OurStory";
import ShopCollection from "./ShopCollection";

export default function HomePage() {
  const [value, setValue] = useState("1");
  const [state, setState] = useState({
    left: false,
  });

  const [productsInCart, setProductsInCart] = useState([]);

  async function fetchProducts() {
    const res = await axios.get("http://localhost:4000/cart");
    setProductsInCart(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: "left") => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="center" style={{ paddingTop: "20px" }}>
        <h1>Cart</h1>
      </div>
      <Divider />
      {productsInCart.map((product) => product)}
    </Box>
  );

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabIndex: string
  ) => {
    setValue(newTabIndex);
  };
  return (
    <>
      <h1 className="text">happy kids</h1>
      {/* <Box> */}
      <div>
        <Link to={"/signup"}>
          <Button>Log In</Button>
        </Link>

        {/* drawer */}
        <React.Fragment key="left">
          <img
            onClick={toggleDrawer("left", true)}
            className="icon"
            src="https://drive.google.com/uc?export=view&id=1nSowEgVusMafPkJOi4vyib5JDPERJBtP"
          ></img>

          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </div>
      <div>
        <TabContext value={value}>
          <TabList
            aria-label="tabs"
            onChange={handleTabChange}
            centered
            className="tabs"
          >
            <Tab className="tabs" value="1" label="Home" />
            <Tab className="tabs" value="2" label="Shop Collection" />
            <Tab className="tabs" value="3" label="Our Story" />
            <Tab className="tabs" value="4" label="Contact" />
          </TabList>
          <TabPanel value="1">{<Home setTab={setValue} />}</TabPanel>
          <TabPanel value="2">{<ShopCollection />}</TabPanel>
          <TabPanel value="3">{<OurStory />}</TabPanel>
          <TabPanel value="4">{<ContactUs />}</TabPanel>
        </TabContext>
      </div>
      {/* </Box> */}
      <hr></hr>
      <Footer />
    </>
  );
}
