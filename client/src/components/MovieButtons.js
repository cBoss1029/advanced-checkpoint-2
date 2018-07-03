import React from 'react';

function MovieButtons(props){
    return (
        <button onClick={()=>{
            if(props.removeMovie){
                console.log(props.id)
                props.removeMovie(props.id);
            }
        }}>Remove</button>
    )
}
export default MovieButtons;