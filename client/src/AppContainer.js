import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadMovies} from './actions';


function mapDispatchToProps(dispatch) {
  return {
    loadMovies: function(){
      dispatch(loadMovies())
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
