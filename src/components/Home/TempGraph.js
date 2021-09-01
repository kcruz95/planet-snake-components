import React from "react";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import "./TempGraph.scss";

// This generates a fairly open ended button thats used in multiple places
export default function TempGraph(props) {
  // Generates a class tag to determine if the button is green or red
  const currentTemp = props.currentTemp;
  const targetTemp = props.targetTemp;
  const icon_styles = { fontSize: "1em" };
  const zone = props.zone;

  return (
    <section className="control-layout">
      <h2>{zone}</h2>
      <section classname="temp-graph">
        <script src="//my.visme.co/visme-embed.js"></script>
        <div class="visme_d" data-url="90rg7xog-snekstate-humidex" data-w="800" data-h="800" data-domain="my"></div>
        <p>
          <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer">
          </a>
        </p>
      </section>
    </section>
  );
}