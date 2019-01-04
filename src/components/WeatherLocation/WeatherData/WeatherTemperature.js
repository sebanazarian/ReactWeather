import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    
    const sizeIcon="4x";

    if(icon){
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
    }else{
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}></WeatherIcons>;
    }

}

const WeatherTemperature = ({ temperature, weatherState }) =>(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

//al ser tipado debil es mas difcil encontrar errores de tipo de datos
// la libreria propTypes nos ayuda a definir que tipo de datos esperamos en una funcion
//isRequired se utiliza para que no llegue nulo
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired, 
};

export default WeatherTemperature; 
