function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
    img: "./images/bulbasaur.jpg",
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={pokeCharacteristics.img} alt={favPokemon}></img>
      <h2>
        {favPokemon}'s type is {pokeCharacteristics.type}
        and one of their moves is {pokeCharacteristics.move}.
      </h2>
    </div>
  );
}

export default Showcase;
