import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

import {
    SUN
} from './../../constants/weathers';

const location="Buenos Aires,ar";
const api_key="38f47904414967a4e4b476a8919e01a4";
const url_base_weather="http://api.openweathermap.org/data/2.5/weather";

const api_weather=`${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature:5,
    weatherState: SUN,
    humidity: 10,
    wind:'10 m/s',

}



class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {  //Estado Incial
            city: 'Buenos Aires',
            data: data,
        };
    }

    getWeatherState = weather_data =>{
        return SUN;
    }

    getData = weather_data =>{
        const{humidity,temp} = weather_data.main;
        const{speed}= weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);;

        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handleUpdateClick = () =>{
       
       //fetch sirve para algunos navegadores
       // axion se puede usar como reemplazo
       fetch(api_weather).then(resolve => {
            return resolve.json();
       }).then(data =>{

           const newWeather = this.getData(data);
           this.setState({
               data:newWeather
           });
            console.log(newWeather);
            debugger;
       
       });
    }

    render(){ // con el estado inicial se hace una primera renderización
        const{city,data}=this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data} ></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }    
};

export default WeatherLocation;