import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Weather = () => {
  // const response = useSelector(state => state.weatherReducer.response);
  // const loading = useSelector(state => state.weatherReducer.loading);

  const { response, loading, error } = useSelector(
    state => state.weatherReducer
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3 style={{ color: 'red' }}>{error}</h3>;
  }

  return (
    response && (
      <div className="card">
        <h2>{response.location.name}</h2>
        <h3>
          {response.current.condition.text}
          <span>
            Wind {response.current.wind_kph}km/h
            <span className="dot">•</span> Precip {response.current.precip_in}%
          </span>
        </h3>
        <h1>{response.current.temp_c}°</h1>
        <div className="sky">
          <img
            style={{ width: '100%' }}
            src={response.current.condition.icon}
            alt=""
          />
        </div>
        <table>
          <thead>
            <tr>
              {/* <td>TUE</td>
          <td>WED</td>
          <td>THU</td>
          <td>FRI</td>
          <td>SAT</td> */}
              {response.forecast.forecastday.map((el, i) => {
                const date = new Date(el.date);
                return <td key={i}>{date.toString().slice(0, 3)}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {response.forecast.forecastday.map((el, i) => (
                <td key={i}>{el.day.maxtemp_c}</td>
              ))}
            </tr>
          </tbody>
          <tfoot>
            <tr>
              {response.forecast.forecastday.map((el, i) => (
                <td key={i}>{el.day.mintemp_c}</td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    )
  );
};

export default Weather;
