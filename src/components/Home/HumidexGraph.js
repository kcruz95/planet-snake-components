import React from "react";
import Iframe from 'react-iframe'

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import "./HumidexGraph.scss";

// This generates a fairly open ended button thats used in multiple places
export default function HumidexGraph(props) {


  return (
    <section className="control-layout">

      <section className="humidex-graph">
        <script src="//my.visme.co/visme-embed.js"></script>
        <div class="visme_d" data-url="90rg7xog-snekstate-humidex" data-w="2800" data-h="2800" data-domain="my">
        </div>
        <p>
          <Iframe url="https://my.visme.co/view/90rg7xog-snekstate-humidex#s1"
            data-w="2800"
            data-h="2800"
            id="myId"
            className="humidex-graph"
            display="initial"
            position="relative" />
        </p>
      </section>
    </section>
  );
}
