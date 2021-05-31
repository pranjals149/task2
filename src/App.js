import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Weather from './Components/Weather/Weather';
import { setWeatherData } from './features/weather/weatherSlice';
import { selectWeatherData } from './features/weather/weatherSlice'

const { REACT_APP_WHETHER_API, REACT_APP_API_URL, REACT_APP_CITY } = process.env;

function App() {

  const dispatch = useDispatch()

  const weather_data = useSelector(selectWeatherData)

  useEffect(() => {

    axios
      .get(`http://${REACT_APP_API_URL}/weather?q=${REACT_APP_CITY}&appid=${REACT_APP_WHETHER_API}&units=metric`)
      .then((res) => {
        dispatch(setWeatherData(res.data));
      })
      .catch(err => alert(err.message))

  }, [])

  return (
    <div className="App">
      <Weather weather_data={weather_data} />
    </div>
  );
}

export default App;
