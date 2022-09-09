//import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

function App() {
  return (
  <div>
  <h1 className="text-white text-center bg-gray-900 opacity-90 font-poppins text-3xl py-3">Ja<span className="text-purple-600">mmm</span>ing</h1>
  <div className="text-white font-worksans font-medium pt-0 pr-[17%] pb-[10%] pl-[17%]">
    <SearchBar />
    <div className="App-playlist flex flex-col items-center lg:flex-row lg:w-[100%] lg:justify-between">
      <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
);
}

export default App;
