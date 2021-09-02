import React from "react";
import Iframe from "react-iframe";

import "./HumidexGraph.scss";


export default function HumidexGraph(props) {


  return (
    <section className="control-layout">

      <Iframe url="https://my.visme.co/view/90rg7xog-snekstate-humidex#s1"
        data-w="2800"
        data-h="2800"
        id="myId"
        className="humidex-graph"
        display="initial"
        position="relative" />
      {/* <section className="humidex-graph">
        <script src="//my.visme.co/visme-embed.js"></script>
        <div class="visme_d" data-url="90rg7xog-snekstate-humidex" data-w="2800" data-h="2800" data-domain="my">
        </div>
        <p>
        </p>
      </section> */}
    </section>
  );
}