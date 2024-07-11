import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        # {id} - {name}
      </h2>

      <div className="">
        {sprites.map((sprite) => (
          <img src={sprite} key={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
