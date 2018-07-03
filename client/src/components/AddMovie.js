import React, {Component} from 'react';


class AddMovie extends Component {
    constructor(){
        super();
        this.state = {
            movie: {
                title: '',
                genre: '',
                director: '',
                releaseDate: '',
                rating: ''
            }
        }
    }
    render() {
        return (
            <div>
                <h1>New Movie</h1>
                <form onSubmit={(e) => {
                e.preventDefault();
                if (this.props.createMovie) {
                this.props.createMovie(this.state.movie);
            }
          }}>
            <div>
              Title: <input onChange={(e) => {
                const movie = {title: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Genre: <input onChange={(e) => {
                const movie = {genre: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Director: <input onChange={(e) => {
                const movie = {director: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Release Date: <input onChange={(e) => {
                const movie = {releaseDate: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Rating: <input onChange={(e) => {
                const movie = {rating: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <button>Add</button>
          </form>

            </div>
        )
    }
}
export default AddMovie;