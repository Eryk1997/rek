import React, { Component } from "react";
import EditButton from "./EditButtons";
import InputEdit from "./InputEdit";
import clientService from "../../Service/clientService";

export default class Edit extends Component {
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
    clientService.edit(this.state);
  };

  render() {
    return (
      <div className="mt-3">
        <form onSubmit={this.handleSubmit}>
          <InputEdit
            fieldName="Imie"
            name="name"
            type="text"
            func={this.handleChange}
            value={this.state.name}
          />

          <InputEdit
            fieldName="Nazwisko"
            name="surname"
            type="text"
            func={this.handleChange}
            value={this.state.surname}
          />

          <InputEdit
            fieldName="Email"
            name="email"
            type="email"
            func={this.handleChange}
            value={this.state.email}
          />
          <EditButton />
        </form>
      </div>
    );
  }
}
