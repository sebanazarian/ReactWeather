import React,{Component} from 'react';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import {
    SUN
} from './../../constants/weathers';



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

    
    handleUpdateClick = () =>{
       
       //fetch sirve para algunos navegadores
       // axion se puede usar como reemplazo
       fetch(api_weather).then(resolve => {
            return resolve.json();
       }).then(data =>{

           const newWeather = transformWeather(data);
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