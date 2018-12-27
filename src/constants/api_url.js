const location="Buenos Aires,ar";

const api_key="38f47904414967a4e4b476a8919e01a4";
const url_base_weather="http://api.openweathermap.org/data/2.5/weather";

export const api_weather=`${url_base_weather}?q=${location}&appid=${api_key}`;;