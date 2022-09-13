import React from 'react';

export class Track extends React.Component{
    constructor(props){
        super(props)
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    
    renderAction(isRemoval){
        if(isRemoval){
            return '-';
        }
        else{
            return '+';
        }
    }

    addTrack(){
        this.props.onAddd(this.props.track); //ok aguas aqui.
        console.log('+++');
    }

    removeTrack(){
        this.props.onRmv(this.props.track);
        console.log('- - -');
    }
    
    render(){
        return(
        <div className="Track flex items-center border-b border-[#ffffffcc] border-solid last:mb-4">
            <div class="Track-information flex-grow flex flex-col justify-center h-[4.5rem]">
                <h3 className=" text-xl font-semibold mb-[0.3rem]">{this.props.track.name}</h3>
                <p className=" text-sm text-[#ffffffcc] font-light"> {this.props.track.artist} | {this.props.track.album} </p>
            </div>
            <button className="Track-action text-white bg-transparent text-base font-bold 
            p-2 border-none cursor-pointer transition-colors duration-300 
            ease-in-out hover:text-gray-400" onClick={this.props.isRemoval? this.removeTrack : this.addTrack}> {this.renderAction(this.props.isRemoval)} </button>
        </div>
        );
    }
}