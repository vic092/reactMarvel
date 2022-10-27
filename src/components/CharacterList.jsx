import React from "react";
import SincgleCharacter from "./SingleCharacter";

export default function CharacterList({ characters, search }) {
  const fCharacters = characters.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row mt-3 justify-content-center">
      {fCharacters.map((c, i) => (
        <div className="col-md-3 border border-light m-2 rounded-3" key={i}>
          <SincgleCharacter c={c}></SincgleCharacter>
        </div>
      ))}
    </div>
  );
}
