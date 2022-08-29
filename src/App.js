import './App.css';
import axios from 'axios';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import { useState } from 'react';

const App = () => {
  const [response, setReponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchWeather = async query => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${query}&days=4&aqi=no&alerts=no`
      );
      setReponse(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Search searchWeather={searchWeather} />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        response && <Weather response={response} />
      )}
    </div>
  );
};

export default App;
