import { TabPanel, TabContext, TabList } from "@mui/lab";
import type {} from "@mui/lab/themeAugmentation";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import Home from "./Home";
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
      <Box>
        <TabContext value={value}>
          <TabList aria-label="tabs" onChange={handleTabChange} centered>
            <Tab value="1" label="Home" />
            <Tab value="2" label="Shop Collection" />
            <Tab value="3" label="Our Story" />
            <Tab value="4" label="Contact" />
          </TabList>
          <TabPanel value="1">{<Home setTab={setValue} />}</TabPanel>
          <TabPanel value="2">{<ShopCollection />}</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Four</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
