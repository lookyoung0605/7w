import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function TvDetail() {
  const { state } = useLocation();
  const { name } = useParams();

  return (
    <div
      style={{
        display: "flex",
        margin: "100px",
      }}
    >
      <img
        src={state.url["url"] + state.poster_path["poster_path"]}
        alt={name}
        style={{
          width: " 300px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
}
