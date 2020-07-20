import React, { Component } from 'react';
import classes from './MainPage.module.scss';
import Aux from '../../hoc/Auxilliary';
import Pokemon from '../../Pokemon/Pokemon/Pokemon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getWeaknesses, getUnpreparedTypes } from '../../Pokemon/getData.js';

class MainPage extends Component {

  constructor(props) {
    super(props);
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
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      pokemon1: props.updateMainPagePokemon1,
      pokemon2: props.updateMainPagePokemon2,
      pokemon3: props.updateMainPagePokemon3,
      pokemon4: props.updateMainPagePokemon4,
      pokemon5: props.updateMainPagePokemon5,
      pokemon6: props.updateMainPagePokemon6,
      types: props.updateMainPageTypes,
      weakTypes: props.updateMainPageWeakTypes,
      unpreparedTypes: props.updateMainPageUnpreparedTypes,
    }
  }


  render() {

    let weakTypesIter = (weakTypesVar) => {
      let output = [];
      if (weakTypesVar != null) {
        for (let i = 0; i < weakTypesVar.length; i++) {
          output.push(<div key={weakTypesVar[i]} className={classes.Type_icon + " " + weakTypesVar[i] + " col-md-3 mb-4"}>{weakTypesVar[i]}</div>);
        }
        return output;
      }
    }
    let unpreparedTypesIter = (unpreparedTypesVar) => {
      let output = [];
      if (unpreparedTypesVar != null) {
        for (let i = 0; i < unpreparedTypesVar.length; i++) {
          output.push(<div key={unpreparedTypesVar[i]} className={classes.Type_icon + " " + unpreparedTypesVar[i] + " col-md-3 mb-4"}>{unpreparedTypesVar[i]}</div>);
        }
        return output;
      }
    }



    return (
      <Aux>
        <div className={classes.results + " row justify-content-center"}>
          <div className={classes.resultsBlock + " col"}>
            <h3 className="text-center">These types of pokemon are still a danger to your team!</h3>
            <div className="row justify-content-center">{weakTypesIter(this.state.weakTypes)}</div>
          </div>
          <div className={classes.resultsBlock + " col"}>
            <h3 className="text-center">These types of pokemon are still not covered by your team!</h3>
            <div className="row justify-content-center">{unpreparedTypesIter(this.state.unpreparedTypes)}</div>
          </div>
        </div>
      </Aux>
    )
  }
}

export default MainPage;
