import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Home.css";
import { Icon } from "leaflet";
import { Button } from "@mui/material";

function ContactUs() {
  const [value, setValue] = useState(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
  );
  const handleSkinChange = (
    event: React.SyntheticEvent,
    newSkinIndex: string
  ) => {
    setValue(newSkinIndex);
  };

  const customIcon = new Icon({
    iconUrl:
      "https://drive.google.com/uc?export=view&id=1_0JH6cFLsq4_NoNO19k-e_pxRLCAJXc-",
    iconSize: [38, 38],
  });

  return (
    <>
      <h2 className="text">Contact Us</h2>
      <div className="footerContainer">
        <div className="footerCard">
          <p className="text">VISIT US</p>
          <p>&nbsp;</p>
          <p>
            500 Terry Francois St.<br></br> San Francisco, CA 94158 <br></br>
            123-456-7890
          </p>
        </div>

        <div className="footerCard">
          <p className="text">OPENING HOURS</p>
          <p>&nbsp;</p>
          <p>
            Mon - Fri: 7am - 10pm.<br></br> Saturday: 8am - 10pm <br></br>
            ​Sunday: 8am - 11pm
          </p>
        </div>

        <div className="footerCard">
          <p className="text">CUSTOMER SERVICE</p>
          <p>&nbsp;</p>
          <p>
            1-800-000-000<br></br> 123-456-7890 <br></br>
            info@mysite.com
          </p>
        </div>
      </div>

      <p className="text">FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</p>
      <QuestionForm />

      <Button
        onClick={() =>
          setValue(() => {
            return "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
          })
        }
      >
        Map
      </Button>
      <Button
        onClick={() =>
          setValue(() => {
            return "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png";
          })
        }
      >
        Satellite
      </Button>
      <MapContainer center={[37.7707, -122.3896]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={value}
        />
        <Marker position={[37.7707, -122.3896]} icon={customIcon}>
          <Popup>happy kids</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

//stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}
// https: var Stamen_TonerLite = L.tileLayer(
//   "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
//   {
//     attribution:
//       'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     subdomains: "abcd",
//     minZoom: 0,
//     maxZoom: 20,
//     ext: "png",
//   }
// );

export default ContactUs;
