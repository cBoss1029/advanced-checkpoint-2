import {connect} from 'react-redux'
import {createMovie} from '../actions';
import AddMovie from '../components/AddMovie';

function mapDispatchToProps(dispatch){
    return {
        createMovie: function(movie){
            dispatch(createMovie(movie))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddMovie);