
export const getWeaknesses = (types /* types = the types of the pokemon in party */, evalTypes /* evalTypes = all other pokemon types */) => {

  // removing types that party is immune to



  let pokemonTypesList = [
    {"name":"normal","immunes":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
    {"name":"Fire","immunes":[],"weaknesses":["Fire","Water","Rock","Dragon"],"strengths":["Grass","Ice","Bug","Steel"]},
    {"name":"Water","immunes":[],"weaknesses":["Water","Grass","Dragon"],"strengths":["Fire","Ground","Rock"]},
    {"name":"Electric","immunes":["Ground"],"weaknesses":["Electric","Grass","Dragon"],"strengths":["Water","Flying"]},
    {"name":"Grass","immunes":[],"weaknesses":["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],"strengths":["Water","Ground","Rock"]},
    {"name":"Ice","immunes":[],"weaknesses":["Fire","Water","Ice","Steel"],"strengths":["Grass","Ground","Flying","Dragon"]},
    {"name":"Fighting","immunes":["Ghost"],"weaknesses":["Poison","Flying","Psychic","Bug","Fairy"],"strengths":["Normal","Ice","Rock","Dark","Steel"]},
    {"name":"Poison","immunes":["Steel"],"weaknesses":["Poison","Ground","Rock","Ghost"],"strengths":["Grass","Fairy"]},
    {"name":"Ground","immunes":["Flying"],"weaknesses":["Grass","Bug"],"strengths":["Fire","Electric","Poison","Rock","Steel"]},
    {"name":"Flying","immunes":[],"weaknesses":["Electric","Rock","Steel"],"strengths":["Grass","Fighting","Bug"]},
    {"name":"Psychic","immunes":["Dark"],"weaknesses":["Psychic","Steel"],"strengths":["Fighting","Poison"]},
    {"name":"Bug","immunes":[],"weaknesses":["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],"strengths":["Grass","Psychic","Dark"]},
    {"name":"Rock","immunes":[],"weaknesses":["Fighting","Ground","Steel"],"strengths":["Fire","Ice","Flying","Bug"]},
    {"name":"Ghost","immunes":["Normal"],"weaknesses":["Dark"],"strengths":["Psychic","Ghost"]},
    {"name":"Dragon","immunes":["Fairy"],"weaknesses":["Steel"],"strengths":["Dragon"]},
    {"name":"Dark","immunes":[],"weaknesses":["Fighting","Dark","Fairy"],"strengths":["Psychic","Ghost"]},
    {"name":"Steel","immunes":[],"weaknesses":["Fire","Water","Electric","Steel"],"strengths":["Ice","Rock","Fairy"]},
    {"name":"Fairy","immunes":[],"weaknesses":["Fire","Poison","Steel"],"strengths":["Fighting","Dragon","Dark"]}
  ];
  let weakTypes = [];

  // Throwing all the types in
  for (let i = 0; i < types.length; i++) {
    for (let k = 0; k < pokemonTypesList.length; k++) {
      for (let m = 0; m < pokemonTypesList[k].strengths.length; m++) {
        pokemonTypesList[k].strengths[m] = pokemonTypesList[k].strengths[m].toLowerCase();
      }
      if (pokemonTypesList[k].strengths.includes(types[i])) {
        if (weakTypes.includes(pokemonTypesList[k].name)) {

        }
        else{
          pokemonTypesList[k].name = pokemonTypesList[k].name.toLowerCase();
          weakTypes.push(pokemonTypesList[k].name);
        }
      }
    }
  }

    // Weeding out the types that are weak to those of the party

    for (let j = 0; j < types.length; j++) {
      types[j] = types[j].toLowerCase();

      let typeStrongAgainst = [];
      for (let p = 0; p < pokemonTypesList.length; p++) {
        pokemonTypesList[p].name = pokemonTypesList[p].name.toLowerCase();
        if (types[j] == pokemonTypesList[p].name) {

          for (let q = 0; q < pokemonTypesList[p].strengths.length; q++) {
            pokemonTypesList[p].strengths[q] = pokemonTypesList[p].strengths[q].toLowerCase();
            typeStrongAgainst.push(pokemonTypesList[p].strengths[q]);
          }
          weakTypes.forEach((e, index) => {
            if (typeStrongAgainst.includes(e)) {
              weakTypes.splice(index, 1)
            }
          })
        }
      }
    }


  weakTypes.forEach((e, index) => {
    if (!evalTypes.includes(e)) {
      weakTypes.splice(index, 1);
    }
  })
  return weakTypes;
}




// finding types that party isn't prepared against

export const getUnpreparedTypes = types => {

  let pokemonTypesList = [
    {"name":"normal","immunes":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
    {"name":"Fire","immunes":[],"weaknesses":["Fire","Water","Rock","Dragon"],"strengths":["Grass","Ice","Bug","Steel"]},
    {"name":"Water","immunes":[],"weaknesses":["Water","Grass","Dragon"],"strengths":["Fire","Ground","Rock"]},
    {"name":"Electric","immunes":["Ground"],"weaknesses":["Electric","Grass","Dragon"],"strengths":["Water","Flying"]},
    {"name":"Grass","immunes":[],"weaknesses":["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],"strengths":["Water","Ground","Rock"]},
    {"name":"Ice","immunes":[],"weaknesses":["Fire","Water","Ice","Steel"],"strengths":["Grass","Ground","Flying","Dragon"]},
    {"name":"Fighting","immunes":["Ghost"],"weaknesses":["Poison","Flying","Psychic","Bug","Fairy"],"strengths":["Normal","Ice","Rock","Dark","Steel"]},
    {"name":"Poison","immunes":["Steel"],"weaknesses":["Poison","Ground","Rock","Ghost"],"strengths":["Grass","Fairy"]},
    {"name":"Ground","immunes":["Flying"],"weaknesses":["Grass","Bug"],"strengths":["Fire","Electric","Poison","Rock","Steel"]},
    {"name":"Flying","immunes":[],"weaknesses":["Electric","Rock","Steel"],"strengths":["Grass","Fighting","Bug"]},
    {"name":"Psychic","immunes":["Dark"],"weaknesses":["Psychic","Steel"],"strengths":["Fighting","Poison"]},
    {"name":"Bug","immunes":[],"weaknesses":["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],"strengths":["Grass","Psychic","Dark"]},
    {"name":"Rock","immunes":[],"weaknesses":["Fighting","Ground","Steel"],"strengths":["Fire","Ice","Flying","Bug"]},
    {"name":"Ghost","immunes":["Normal"],"weaknesses":["Dark"],"strengths":["Psychic","Ghost"]},
    {"name":"Dragon","immunes":["Fairy"],"weaknesses":["Steel"],"strengths":["Dragon"]},
    {"name":"Dark","immunes":[],"weaknesses":["Fighting","Dark","Fairy"],"strengths":["Psychic","Ghost"]},
    {"name":"Steel","immunes":[],"weaknesses":["Fire","Water","Electric","Steel"],"strengths":["Ice","Rock","Fairy"]},
    {"name":"Fairy","immunes":[],"weaknesses":["Fire","Poison","Steel"],"strengths":["Fighting","Dragon","Dark"]}
  ];
  let unpreparedTypes = [];
  let pokemonStrengths = [];

  for (let i = 0; i < types.length; i++) {
    types[i] = types[i].toLowerCase();
    for (let k = 0; k < pokemonTypesList.length; k++) {
      pokemonTypesList[k].name = pokemonTypesList[k].name.toLowerCase();
      if (types[i] == pokemonTypesList[k].name) {
        pokemonTypesList[k].strengths.forEach((e) => {
          if (!pokemonStrengths.includes(e)) {
            e = e.toLowerCase();
            pokemonStrengths.push(e);
          }
        })
      }
    }
  }
  pokemonTypesList.forEach((e, index) => {
    if (!pokemonStrengths.includes(e.name)) {
      unpreparedTypes.push(e.name);
    }
  });


  return unpreparedTypes;

}
