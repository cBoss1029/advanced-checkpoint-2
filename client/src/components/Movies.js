import React, {Component} from 'react';
import Mapper from './Mapper';

function Movies(props) {
    return(
        <Mapper data={props.movies} path='movie' field='title' field1='genre' field2='director' field3='releaseDate' field4='rating'/>
    )
}
export default Movies;