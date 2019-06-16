import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  OverlayView
} from "@react-google-maps/api";
import Geocoder from "react-native-geocoding";
import AlumniMarker from "../components/AlumniMarker.js";

var API_KEY = "AIzaSyDz64xTmi1F4sy2dU0DZ45z6fTTDVwEIX8";
var GEO_API_KEY = "AIzaSyD6W4TK5O9Iexwkh45tRxll8ywozux420A";
Geocoder.init(GEO_API_KEY);

export default class Map extends Component {
  state = { 
    markers: this.fillLocations(this.props.data).map((local, i) => local.then((_) => <AlumniMarker local={(_.results[0].geometry.location)} key={i} />)),
  }
  // createInfos(local) {
  //   <OverlayView
  //     position={{ local }}
  //     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  //   >
  //     <div
  //       style={{
  //         background: `white`,
  //         border: `1px solid #ccc`,
  //         padding: 15
  //       }}
  //     >
  //       <h1>OverlayView</h1>

  //       <button
  //         onClick={() => {
  //           console.info("I have been clicked!");
  //         }}
  //         type="button"
  //       >
  //         Click me
  //       </button>
  //     </div>
  //   </OverlayView>;
  // }

  fillLocations(locations) {
    return Array.from(locations)
    .filter(_ => _.whereAreTheyNow !== "Unknown")
    .filter(_ => _.whereAreTheyNow !== undefined)
    .map((data, i) => {
      return Geocoder.from(data.whereAreTheyNow)
        .catch(error => console.warn(error));
    });

    // return tempArray;
  }

  render() {
    var { markers } = this.state;
    var temp = [];
    markers.map(_ => _.then(marker => temp.push(marker)));
    console.log(temp, this.state);
    return (
      <div
        style={{
          margin: "auto",
          padding: "50px",
          textAlign: "-webkit-center",
          border: "10px",
          borderColor: "black",
          borderWidth: "5px"
        }}
      >
        <div id="header" />
        <div id="body">
          <LoadScript
            id="script-loader"
            googleMapsApiKey={API_KEY}
            language="en"
            region="EN"
            version="weekly"
          >
            <GoogleMap
              id="alumni-map"
              mapContainerStyle={{
                height: "400px",
                width: "800px"
              }}
              zoom={4}
              center={{ lat: 41.8781136, lng: -87.6297982 }}
            >
            { temp }
            </GoogleMap>
          </LoadScript>
        </div>
        <div id="footer" />
      </div>
    );
  }
}
