import {connect} from 'react-redux';
import Movies from '../components/Movies';

const mapStateToProps=(state)=>({movies: state.movies});
export default connect(mapStateToProps)(Movies);