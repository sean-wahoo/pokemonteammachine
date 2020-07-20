import React, { Component } from 'react';
import classes from './Pokemon.module.scss'
import Aux from '../../hoc/Auxilliary';
import './Pokemon.module.scss'
import PokemonList from '../PokemonList/PokemonList';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: null,
      name: null,
      type1: null,
      type2: null,
      generation: null,
      game: null,
      sprite: null,
    }
  }

  updatePokemonName = pokemon => {
    this.setState({ name: pokemon });
  }


  async componentDidUpdate(prevProps, prevState) {

    if (this.state.name == prevState.name) {

    }

    else {
      const url = "https://pokeapi.co/api/v2/pokemon/" + this.state.name + "/";
      const response = await fetch(url);
      const data = await response.json();
      const generation = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + data.name + "/");
      const generationData = await generation.json();

      if (data.types[1]) {
        this.setState({
          loading: false,
          id: data.id,
          name: data.name,
          type1: data.types[0].type.name,
          type2: data.types[1].type.name,
          generation: generationData.generation.name,
          sprite: data.sprites.front_default,
        });
      }

      else {
        this.setState({
          loading: false,
          id: data.id,
          name: data.name,
          type1: data.types[0].type.name,
          type2: null,
          generation: generationData.generation.name,
          sprite: data.sprites.front_default,
        });
      }
    }
  }



  twoTypes() {
    if (this.state.type2 != null) {
      const type1 = this.state.type1;
      const type2 = this.state.type2;
      return (
        <Aux>
          <div className="types">
            <div className={classes.Type_icon  + " " + this.state.type1}>{this.state.type1}</div>
            <div className={classes.Type_icon  + " " + this.state.type2}>{this.state.type2}</div>
          </div>
        </Aux>
      );
    }
    else {
      const type1 = this.state.type1;
      return (
        <Aux>
          <div className="types">
            <div className={classes.Type_icon  + " " + this.state.type1}>{this.state.type1}</div>
          </div>
        </Aux>
      );
    }
  }

  isLoaded (){
    if (this.state.sprite) {
      return (
        <img src={this.state.sprite} className={classes.PokemonSprite + " col"}/>
      );
    }
  }

  render() {
    return (
      <div className={classes.PokemonListBlock}>
        <PokemonList updatePokemonName={this.updatePokemonName} updatePokemon={this.props.updatePokemon} />
        <div className={"row " + classes.big_pokemon_area}>
          {this.isLoaded()}
          <div className={"col " + classes.pokemon_type_block}>
            <p className={classes.PokemonName}>{this.state.name}</p>
            {this.twoTypes()}
          </div>
        </div>
      </div>
    );
  }


}

export default Pokemon;
