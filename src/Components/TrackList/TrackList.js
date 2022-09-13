import React from 'react';
import {Track} from '../Track/Track'

export class TrackList extends React.Component{
    
    
    getTracks(tks){
        if(tks.length > 0){
            //{name:'SSS',artist:'DDD', album:'FFF', id:3}
            let lis =  tks.map(t => <Track track={t} onAddd={this.props.onAdd} onRmv={this.props.onRemove} isRemoval={this.props.isRemoval}/>);
            return lis; 
        }
        else{
            return '';
        }
    }
    
    render(){
        return(<div className="TrackList w-full">
            {this.getTracks(this.props.tracks)}
        </div>);
    }
}