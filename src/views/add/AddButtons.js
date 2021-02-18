import React, { Component } from 'react'

export default class AddButton extends Component {
    render() {
        return (
            <div className="col-md-5 col-sm-12">

            <button
              type="submit"
              className="btn btn-outline-secondary"
            >
              Dodaj
            </button>
          </div>
        )
    }
}
