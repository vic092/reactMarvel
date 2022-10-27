import React from "react";

export default function SingleCharacter({ c }) {
  return (
    <div className="text-center text-light p-5 ">
      <h4 className="text-danger">{c.name}</h4>
      <img
        src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
        alt=""
        className="img-fluid rounded-2"
      />
      <p>{c.description ? c.description : "Data not Found"}</p>
    </div>
  );
}
