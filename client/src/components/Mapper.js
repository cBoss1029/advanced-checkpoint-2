import React, { Component } from "react";
import { Link } from "react-router-dom";



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
            {d[this.props.field]}
            {d[this.props.field1]}
            {d[this.props.field2]}
            {d[this.props.field3]}
            <Link to={"/" +this.props.path + "/" + d._id}> View </Link>
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
