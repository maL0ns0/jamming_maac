import React from 'react';

export class Playlist extends React.Component{
    render(){
    return(
    <div className="Playlist bg-[#1e183dc5] shadow-md w-[90%] max-h-[59.37rem] py-9 px-4 flex flex-col items-center overflow-y-scroll scrollbar-hide lg:w-[37%] lg:h-[59.37rem]">
        <input className="text-white text-2xl font-poppins bg-transparent w-[100%] border-b border-solid border-gray-50 outline-none " value={'New Play List'}/>
        //Add a TrackList component
        <button class="Playlist-save bg-pink-800 text-white text-center text-sm font-semibold border-none cursor-pointer w-32 py-3 rounded-[3.375rem] transition-colors duration-300 ease-in-out hover:opacity-70">SAVE TO SPOTIFY</button>
    </div>
    );
    }    
}