import React, { Component } from "react";
import {
    OverlayView
  } from "@react-google-maps/api";

export default class AlumniMarker extends Component {
  render() {
      console.log(this.props)
    return (
      <OverlayView
        position={this.props.local}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div
          style={{
            background: "white",
            border: "1px solid #ccc",
            padding: 1
          }}
        >
          <p>Local</p>

          <button
            onClick={() => {
              console.info("I have been clicked!", this.props.local);
            }}
            type="button"
          >
            Click me
          </button>
        </div>
      </OverlayView>
    );
  }
}
