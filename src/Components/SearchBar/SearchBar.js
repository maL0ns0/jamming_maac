import React from 'react';

export class SearchBar extends React.Component{
    
    render(){
        return (
        <div className="SearchBar flex flex-col items-center py-24">
            <input className="text-base text-purple-900 font-bold text-center w-72 mb-9 py-3 border border-white border-solid rounded focus:outline-none" placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton bg-violet-900 text-white text-center text-sm font-semibold border-none cursor-pointer w-32 py-3 rounded-[3.375rem] transition-colors duration-300 ease-in-out hover:bg-violet-700">SEARCH</button>
        </div>
        );
    }
}