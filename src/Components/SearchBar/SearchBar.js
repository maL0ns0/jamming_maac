import React from 'react';

export class SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {term:''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(e){
        let searchTrm = e.target.value;
        this.setState({term: searchTrm});
        this.search();
    }
    
    search(){
        this.props.onSearch(this.state.term);
    }
    
    render(){
        return (
        <div className="SearchBar flex flex-col items-center py-24">
            <input className="text-base text-purple-900 font-bold text-center 
            w-72 mb-9 py-3 border border-white border-solid rounded focus:outline-none" 
            placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
            
            <button className="SearchButton bg-violet-900 text-white text-center text-sm 
            font-semibold border-none cursor-pointer w-32 py-3 rounded-[3.375rem] transition-colors 
            duration-300 ease-in-out hover:bg-violet-700 hover:opacity-80">
                SEARCH
            </button>
        </div>
        );
    }
}