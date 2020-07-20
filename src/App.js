import React, { Component } from 'react';
import classes from './App.module.css';
import Aux from './hoc/Auxilliary';
import Pokemon from './Pokemon/Pokemon/Pokemon';
import SideBar from './Layout/SideBar/SideBar';
import MainPage from './Layout/MainPage/MainPage';

class App extends Component {

  constructor(props) {
    super(props);

    this.updateAppPokemon1 = this.updateAppPokemon1.bind(this);
    this.updateAppPokemon2 = this.updateAppPokemon2.bind(this);
    this.updateAppPokemon3 = this.updateAppPokemon3.bind(this);
    this.updateAppPokemon4 = this.updateAppPokemon4.bind(this);
    this.updateAppPokemon5 = this.updateAppPokemon5.bind(this);
    this.updateAppPokemon6 = this.updateAppPokemon6.bind(this);
    this.updateAppTypes = this.updateAppTypes.bind(this);
    this.updateAppWeakTypes = this.updateAppWeakTypes.bind(this);
    this.updateAppUnpreparedTypes = this.updateAppUnpreparedTypes.bind(this);
    this.updateSideBar = this.updateSideBar.bind(this);

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
  }

  updateAppPokemon1(mon, types) {
    this.setState({
      types: types,
      pokemon1: mon
    })
  }
  updateAppPokemon2(mon, types) {
    this.setState({
      types: types,
      pokemon2: mon
    })
  }
  updateAppPokemon3(mon, types) {
    this.setState({
      types: types,
      pokemon3: mon
    })
  }
  updateAppPokemon4(mon, types) {
    this.setState({
      types: types,
      pokemon4: mon
    })
  }
  updateAppPokemon5(mon, types) {
    this.setState({
      types: types,
      pokemon5: mon
    })
  }
  updateAppPokemon6(mon, types) {
    this.setState({
      types: types,
      pokemon6: mon
    })
  }
  updateAppTypes(types) {
    console.log(types);
    this.setState({
      types: types
    })
  }
  updateAppWeakTypes(weakTypes) {
    this.setState({
      weakTypes: weakTypes
    })
  }
  updateAppUnpreparedTypes(unpreparedTypes) {
    this.setState({
      unpreparedTypes: unpreparedTypes
    })
  }
  updateSideBar(isOut) {

    this.setState({
      isSideBarOut: !this.state.isSideBarOut
    })
  }



  render() {


    let updateMainPagePokemon1 = this.state.pokemon1;
    let updateMainPagePokemon2 = this.state.pokemon2;
    let updateMainPagePokemon3 = this.state.pokemon3;
    let updateMainPagePokemon4 = this.state.pokemon4;
    let updateMainPagePokemon5 = this.state.pokemon5;
    let updateMainPagePokemon6 = this.state.pokemon6;
    let updateMainPageTypes = this.state.types;
    let updateMainPageWeakTypes = this.state.weakTypes;
    let updateMainPageUnpreparedTypes = this.state.unpreparedTypes;
    let sideBarState = this.state.isSideBarOut;


      return (
        <Aux>
          <SideBar
            updateAppPokemon1={this.updateAppPokemon1}
            updateAppPokemon2={this.updateAppPokemon2}
            updateAppPokemon3={this.updateAppPokemon3}
            updateAppPokemon4={this.updateAppPokemon4}
            updateAppPokemon5={this.updateAppPokemon5}
            updateAppPokemon6={this.updateAppPokemon6}
            updateAppTypes={this.updateAppTypes}
            updateAppWeakTypes={this.updateAppWeakTypes}
            updateAppUnpreparedTypes={this.updateAppUnpreparedTypes}
            isSideBarOut={this.state.isSideBarOut}
           />
           <button className={classes.showPokemonList} onClick={this.updateSideBar}>
            Show Pokemon List
           </button>
          <MainPage
            updateMainPagePokemon1={updateMainPagePokemon1}
            updateMainPagePokemon2={updateMainPagePokemon2}
            updateMainPagePokemon3={updateMainPagePokemon3}
            updateMainPagePokemon4={updateMainPagePokemon4}
            updateMainPagePokemon5={updateMainPagePokemon5}
            updateMainPagePokemon6={updateMainPagePokemon6}
            updateMainPageTypes={updateMainPageTypes}
            updateMainPageWeakTypes={updateMainPageWeakTypes}
            updateMainPageUnpreparedTypes={updateMainPageUnpreparedTypes}
          />
        </Aux>
      );
    }
}

export default App;
