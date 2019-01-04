import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities=[
  'Buenos Aires,ar',
  'Washington,us',
  'Barcelona,es',
  'Ciudad de México, mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {

  handleSelectionLocation= city =>{
    console.log(`handleSelectionLocation ${city}`)
  };

  render() {
    return (
      <div className="App">
        WeatherLocation ( aplicacion del clima)
        <LocationList cities={cities}
          onSelectedLocation={this.handleSelectionLocation}> </LocationList>
      </div>
    );
  }
}

export default App;
