import React, {Component} from 'react';

class Movie extends Component {
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.loadMovie(id)
    }
    render(){
        return(
            <div>
                <h3>Title: {this.props.movie.title}</h3>
                <h3>Genre: {this.props.movie.genre}</h3>
                <h3>Director: {this.props.movie.director}</h3>
                <h3>Release Date: {this.props.movie.releaseDate}</h3>
                <h3>Rating: {this.props.movie.rating}</h3>
            </div>
        )
    }
}
export default Movie;