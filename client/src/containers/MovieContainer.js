import {connect} from 'react-redux';
import Movie from '../components/Movie';
import {loadMovie} from '../actions';

const mapStateToProps=(state)=>({movie: state.movie});
const mapDispatchToProps=(dispatch)=>({
    loadMovie: (id) => {dispatch(loadMovie(id))}
});
export default connect(mapStateToProps, mapDispatchToProps)(Movie);