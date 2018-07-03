import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieButtons from '../containers/MovieButtonsContainer';



class Mapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let userDivs = "";
    if (this.state.visible) {
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            <div>Title: {d[this.props.field]}</div>
            {/* <div>Genre: {d[this.props.field1]}</div> */}
            <div>DirectorL {d[this.props.field2]}</div>
            {/* <div>Release Date: {d[this.props.field3]}</div> */}
            <div>Rating: {d[this.props.field4]}</div>
            <Link to={"/" +this.props.path + "/" + d._id}> View </Link>
            <MovieButtons id= {d._id}/>
          </div>
        );
      });
    } else {
      userDivs = "";
    }
    return (
      <div>
        {userDivs}
      </div>);
  }
}


export default Mapper;
