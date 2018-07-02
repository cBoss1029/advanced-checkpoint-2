export function loadMovies() {
    return function (dispatch) {
      fetch("/movies")
      .then( (response) => {
        return response.json();
      }).then((movies) => {
        dispatch(moviesLoaded(movies));
      });
    };
  }
  function moviesLoaded(movies) {
    return {
      type: "MOVIES_LOADED",
      value: movies
    };
  }
  export function loadMovie(id) {
      return function (dispatch) {
          fetch(`/movie/${id}`)
          .then((res) => {
              return res.json
        }).then((movie) => {
            dispatch(movieLoaded(movie))
        });
      }
  }
  function movieLoaded(movie) {
      return {
          type: 'GET_MOVIE_DONE',
          value: movie
      }
  }
  export function createMovie(movie) {
      return function (dispatch) {
          fetch('/movies', {
              method: 'POST',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify(movie)
          }).then(()=> dispatch(loadMovies()))
      }
  }