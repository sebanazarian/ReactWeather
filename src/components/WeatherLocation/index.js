import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import {
    SUN
} from './../../constants/weathers';


class WeatherLocation extends Component{


    constructor(props){
        super(props);
        const{city}=props;

        this.state = {  //Estado Incial
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) { //Se ejecuta una vez que se hizo el primer renderizado
        console.log("componentDidUpdate");
        
    }
    
    
    handleUpdateClick = () =>{
       const api_weather = getUrlWeatherByCity(this.state.city);
       //fetch sirve para algunos navegadores
       // axion se puede usar como reemplazo
       fetch(api_weather).then(resolve => {

            return resolve.json();
       }).then(data =>{
            console.log("Resulado del handleUpdateClick");
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data:newWeather
            });

            //debugger;
       
       });
    }

    render(){ // con el estado inicial se hace una primera renderización
        console.log("render");
        const{onWeatherLocationClick}=this.props;
        const{city,data}=this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data} ></WeatherData>:<CircularProgress size={50} />}
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>
        );
    }    
};

WeatherLocation.propTypes={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;