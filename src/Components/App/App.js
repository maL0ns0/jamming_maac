//import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import {Spotify} from '../../util/Spotify';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: []}
    this.state.playlistName = 'New Playlist';
    this.state.playlistTracks = [];
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  
  //por ahora asi lo dejo debe regresar las busquedas
  //de spotify
  async search(searchTerm){
    console.log('Searching' + searchTerm);
    Spotify.getAccessToken();
    let results = await Spotify.search(searchTerm);
    if(results){
      this.setState({searchResults: results});
    }
  }
  
  //por ahora asi lo dejo debe regresar los uri.
  //de los tracks para spotify
  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => track + 'uri');
    Spotify.savePlayList(this.state.playlistName, trackURIs);
    //limpiamos
    this.setState({playlistName: 'New Playlist'});
    this.setState({playlistTracks: []});
  }
  
  
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
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist flex flex-col items-center lg:flex-row lg:w-[100%] lg:justify-between">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
    );
  }
}


export default App;
