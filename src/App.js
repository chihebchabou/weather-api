import './App.css';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';

const App = () => {
  return (
    <div className="App">
      <Search />
      <Weather />
    </div>
  );
};

export default App;
