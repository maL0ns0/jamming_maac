import React from 'react';
import {TrackList} from '../TrackList/TrackList'

export class Playlist extends React.Component{
    
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(e){
        let name = e.target.value;
        console.log(name)
        this.props.onNameChange(name);
    }
    
    render(){
    return(
    <div className="Playlist bg-[#1e183dc5] shadow-md w-[90%] max-h-[59.37rem] py-9 px-4 flex flex-col items-center overflow-y-scroll scrollbar-hide lg:w-[37%] lg:h-[59.37rem]">
        <input className="text-white text-3xl font-poppins font-semibold bg-transparent w-[100%] border-b border-solid border-gray-50 outline-none " placeholder='Playlist Name' onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button class="Playlist-save bg-pink-800 text-white text-center text-sm 
        font-semibold border-none cursor-pointer w-32 py-3 rounded-[3.375rem] 
        transition-colors duration-300 ease-in-out hover:opacity-70" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
    </div>
    );
    }    
}