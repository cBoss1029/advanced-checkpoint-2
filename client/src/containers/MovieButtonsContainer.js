import {connect} from 'react-redux'
import {removeMovie} from '../actions';
import MovieButtons from '../components/MovieButtons';

function mapDispatchToProps(dispatch){
    return {
        removeMovie: function(id){
            dispatch(removeMovie(id))
        }
    }
}
export default connect(null, mapDispatchToProps)(MovieButtons);
