import React, { Component } from "react";
import AddButton from "./AddButtons";
import InputAdd from "./InputAdd";
import clientService from '../../Service/clientService'

export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    clientService.add(this.state);
  };

  render() {
    return (
      <div className="mt-3" >
        <form onSubmit={this.handleSubmit}>
          <InputAdd
            fieldName="Imie"
            name="name"
            type="text"
            func={this.handleChange}
            value={this.state.name}
          />

          <InputAdd
            fieldName="Nazwisko"
            name="surname"
            type="text"
            func={this.handleChange}
            value={this.state.surname}
          />

          <InputAdd
            fieldName="Email"
            name="email"
            type="email"
            func={this.handleChange}
            value={this.state.email}
          />
          <AddButton />
        </form>
      </div>
    );
  }
}
