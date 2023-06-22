import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./App.css";

ReactDOM.render(
  <>
    <h1 className="heading_style">
      {" "}
      List Of My Top Favourite Songs On YouTube{" "}
    </h1>

    {Sdata.map(function ncard(val) {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);

// *************************************************************************************
