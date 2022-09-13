import React from 'react';
import {TrackList} from '../TrackList/TrackList'

export class SearchResults extends React.Component{
    render(){
     return(
     <div className="SearchResults  bg-[#1e183dc5] w-[90%] h-[59.37rem] mb-8 overflow-y-scroll scrollbar-hide shadow-md lg:w-[50%] lg:m-0">
         <h2 className="font-poppins text-3xl font-semibold p-3">Results</h2>
         <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
     </div>
     );
    }
}