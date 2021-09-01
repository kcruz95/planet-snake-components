import React from "react";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import "./HumidexGraph.scss";

// This generates a fairly open ended button thats used in multiple places
export default function HumidexGraph(props) {
  // Generates a class tag to determine if the button is green or red
  const currentTemp = props.currentTemp;
  const targetTemp = props.targetTemp;
  const icon_styles = { fontSize: "1em" };
  const zone = props.zone;

  return (
    <section className="control-layout">
      <h2>{zone}</h2>
      <section className="humidex-graph">
        <script src="//my.visme.co/visme-embed.js"></script>
        <div class="visme_d" data-url="90rg7xog-snekstate-humidex" data-w="800" data-h="800" data-domain="my">
        </div>
        <p>
          <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer" style="font-weight:600 !important;text-decoration:none !important;font-size:12px !important;font-family:Arial, sans-serif !important;color:#314152 !important;white-space:nowrap !important">
          </a>
        </p>
      </section>
    </section>
  );
}
