import React from "react";
import HeaterControl from "./HeaterControl";
import TempGraph from "./TempGraph";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function Home(props) {
  return (
    <section>
      {
        <img
          className="vivarium-video"
          src="images/planet_snake.jpg"
          alt="Sunnny the snake"
        />
      }

      <TempGraph zone="zone" />
      <HeaterControl currentTemp={31.5} targetTemp={35} zone="Basking" />
    </section>
  );
}
