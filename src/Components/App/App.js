//import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: [{name:'kkk',artist:'aaa', album:'bbb', id:1}, {name:'SSS',artist:'DDD', album:'FFF', id:2}]} //{name:'', artist:'', album:'', id:1}
    this.state.playlistName = 'My Play List';
    this.state.playlistTracks = [{name:'111',artist:'222', album:'333', id:4}]; //,{name:'111',artist:'222', album:'333', id:4}
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  
  //aqui estoy no agrega y hay error en el find
  //al parecer la quita.
  //primero vamos a lo mas sencillo, vamos a agregar solamente
  addTrack(track){
    
    let res = this.state.playlistTracks.find(ptr => ptr.id === track.id)
    
    if(res){
      return
    }
    else{
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
    }
  }

  removeTrack(track){
    let nwTracks = this.state.playlistTracks.filter(t => t.id !== track.id)
    this.setState({playlistTracks: nwTracks})
  }
  
  updatePlaylistName(name){
    if(name){
      this.setState({playlistName: name});
    }
  }
  
  render(){
    return(
    <div>
      <h1 className="text-white text-center bg-gray-900 opacity-90 font-poppins text-3xl py-3">Ja<span className="text-purple-600">mmm</span>ing</h1>
      <div className="text-white font-worksans font-medium pt-0 pr-[17%] pb-[10%] pl-[17%]">
        <SearchBar />
        <div className="App-playlist flex flex-col items-center lg:flex-row lg:w-[100%] lg:justify-between">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    );
  }
}


/*
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
}*/

export default App;
