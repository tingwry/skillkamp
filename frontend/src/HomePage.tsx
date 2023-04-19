import { TabPanel, TabContext, TabList } from "@mui/lab";
import type {} from "@mui/lab/themeAugmentation";
import { Box, Button, Tab } from "@mui/material";
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
