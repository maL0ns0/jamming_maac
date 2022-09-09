import React from 'react';

export class Track extends React.Component{
    renderAction(){
        if(this.props.isRemoval){
            return '-';
        }
        else{
            return '+';
        }
    }
    
    render(){
        return(
        <div className="Track flex items-center border border-[#ffffffcc] border-solid">
            <div class="Track-information flex-grow flex flex-col justify-center h-[4.5rem]">
                <h3 className="mb-[4.5rem]">Track Name wgh</h3>
                <p className="text-xs text-[#ffffffcc] font-light"> track artist | track album </p>
            </div>
            <button className="Track-action text-white bg-black text-base p-2 border-none cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"> {this.renderAction} </button>
        </div>
        );
    }
}