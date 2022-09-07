//import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';

function App() {
  return (
  <div>
  <h1 className="text-white text-center bg-gray-800 font-poppins text-3xl py-3">Ja<span className="text-purple-600">mmm</span>ing</h1>
  <div className="text-white font-worksans font-medium hexagonbg h-screen pt-0 pr-[17%] pb-[10%] pl-[17%]">
    <SearchBar />
    <div className="App-playlist">
      
    </div>
  </div>
</div>
);
}

export default App;
