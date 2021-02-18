/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

export default class InputAdd extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    return (
      <div>
        <div class="form-group row ml-2 mr-2 ">
          <label class=" col-md-1 col-sm-1 col-form-label ">
            {this.props.fieldName}
            </label>
            <input
              type={this.props.type}
              onChange={this.props.func}
              name={this.props.name}
              value={this.props.email}
              placeholder={this.props.fieldName}
              className="form-control col-sm-5 col-md-3 bg-secondary text-white"
            />

        </div>
        <p className="text-danger col-md-5" id={"error" + name}></p>
      </div>
    );
  }
}
