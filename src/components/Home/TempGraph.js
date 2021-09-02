import React from "react";
import Iframe from "react-iframe";

import "./TempGraph.scss";

export default function TempGraph(props) {

  return (
    <section className="control-layout">

      <section classname="temp-graph">
        <script src="//my.visme.co/visme-embed.js"></script>
        <div class="visme_d" data-url="mxyqyy4w-snekstate-weekly-temp-display" data-w="2800" data-h="2800" data-domain="my">
        </div>
        <p>
          <Iframe url="https://my.visme.co/view/mxyqyy4w-snekstate-weekly-temp-display#s1"
            data-w="2800"
            data-h="2800"
            id="myId"
            className="temp-graph"
            display="initial"
            position="relative" />
        </p>
      </section>
    </section>
  );
}