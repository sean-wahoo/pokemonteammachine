import React, { Component } from 'react';
import classes from './SideBar.module.scss';
import Aux from '../../hoc/Auxilliary';
import Pokemon from '../../Pokemon/Pokemon/Pokemon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getWeaknesses, getUnpreparedTypes } from '../../Pokemon/getData.js';



class SideBar extends Component {

    constructor(props) {
      super(props);

      this.updatePokemon1 = this.updatePokemon1.bind(this);
      this.updatePokemon2 = this.updatePokemon2.bind(this);
      this.updatePokemon3 = this.updatePokemon3.bind(this);
      this.updatePokemon4 = this.updatePokemon4.bind(this);
      this.updatePokemon5 = this.updatePokemon5.bind(this);
      this.updatePokemon6 = this.updatePokemon6.bind(this);

      this.state = {
        pokemon1: null,
        pokemon2: null,
        pokemon3: null,
        pokemon4: null,
        pokemon5: null,
        pokemon6: null,
        // collection of all types down here
        types: [],
        weakTypes: null,
        unpreparedTypes: null,
        isSideBarOut: false
      }
      this.findCoverage = this.findCoverage.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
      if (props.isSideBarOut !== state.isSideBarOut) {
        return {
          isSideBarOut: props.isSideBarOut
        }
      }
    }


    updatePokemon1(mon) {
      this.setState({
        types: [],
        pokemon1: mon
      })
    }
    updatePokemon2(mon) {
      this.setState({
        types: [],
        pokemon2: mon
      })
    }
    updatePokemon3(mon) {
      this.setState({
        types: [],
        pokemon3: mon
      })
    }
    updatePokemon4(mon) {
      this.setState({
        types: [],
        pokemon4: mon
      })
    }
    updatePokemon5(mon) {
      this.setState({
        types: [],
        pokemon5: mon
      })
    }
    updatePokemon6(mon) {
      this.setState({
        types: [],
        pokemon6: mon
      })
    }

      async findCoverage() {

        console.log("working");

        const pStates = [
          this.state.pokemon1,
          this.state.pokemon2,
          this.state.pokemon3,
          this.state.pokemon4,
          this.state.pokemon5,
          this.state.pokemon6
        ];


        for (let i = 0; i < pStates.length; i++) {
          if (pStates[i] == null) {

          }
          else {

            let url = "https://pokeapi.co/api/v2/pokemon/" + pStates[i] + "/";
            let response = await fetch(url);
            let data = await response.json();
            if (data.types[1]) {
              if (!this.state.types.includes(data.types[0].type.name)) {
                this.setState({
                  types: [...this.state.types, data.types[0].type.name]
                });
              }
              if (!this.state.types.includes(data.types[1].type.name)) {
                this.setState({
                  types: [...this.state.types, data.types[1].type.name]
                });
              }
            }
            else {
              if (!this.state.types.includes(data.types[0].type.name)) {
                this.setState({
                  types: [...this.state.types, data.types[0].type.name]
                });
              }
            }
          }
        }

        const pokemonTypesObj = [
          {"name":"Normal","immunes":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
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
        let pokemonTypes = [];
        let typesForEval = [];
        let stateTypes = this.state.types;
        for (let pokemonType in pokemonTypesObj) {
          let typeName = pokemonTypesObj[pokemonType].name.toLowerCase();
          pokemonTypes.push(typeName);
        }
        for (let k = 0; k < pokemonTypes.length; k++) {
          if (!stateTypes.includes(pokemonTypes[k])) {
            typesForEval.push(pokemonTypes[k]);
          }
        }

        let weakTypes = getWeaknesses(stateTypes, typesForEval);
        let unpreparedTypes = getUnpreparedTypes(stateTypes);

        this.setState({
          weakTypes: weakTypes,
          unpreparedTypes: unpreparedTypes,
        })

        // this next part is here because it wont work if it isn't and i couldn't tell ya why

          this.props.updateAppPokemon1(this.state.pokemon1, this.state.types);
          this.props.updateAppPokemon2(this.state.pokemon2, this.state.types);
          this.props.updateAppPokemon3(this.state.pokemon3, this.state.types);
          this.props.updateAppPokemon4(this.state.pokemon4, this.state.types);
          this.props.updateAppPokemon5(this.state.pokemon5, this.state.types);
          this.props.updateAppPokemon6(this.state.pokemon6, this.state.types);
          this.props.updateAppTypes(this.state.types);
          this.props.updateAppWeakTypes(this.state.weakTypes);
          this.props.updateAppUnpreparedTypes(this.state.unpreparedTypes);


      }

  render() {

    return (
      <Aux>
        <div className={classes.SideBar + " " + (this.state.isSideBarOut ? '' : "sidebar_toggle")}>
        <button
          className={classes.TestButton}
          onClick={
            this.findCoverage
          }>
          Test Team</button>
          <Pokemon updatePokemon={this.updatePokemon1}/>
          <Pokemon updatePokemon={this.updatePokemon2}/>
          <Pokemon updatePokemon={this.updatePokemon3}/>
          <Pokemon updatePokemon={this.updatePokemon4}/>
          <Pokemon updatePokemon={this.updatePokemon5}/>
          <Pokemon updatePokemon={this.updatePokemon6}/>
        </div>

      </Aux>
    );
  }
}

export default SideBar;
