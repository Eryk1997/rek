import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Frame from "./Frame";
import "./style.css";


export default class Show extends Component {
  state = {
    clients: [],
    offset: 0,
    limit: 800,
    perPage: 10,
    elements: [],
  };

  constructor(props) {
    super(props);
  }

  receiveData() {
    axios
      .get("http://localhost:8080/getAllClients")
      .then((json) =>
        this.setState(
          {
            clients: json.data,
            pageCount: Math.ceil(json.data.length / this.state.perPage),
          },
          () => this.setElementsForCurrentPage()
        )
      )
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.receiveData();
  }

  setElementsForCurrentPage() {
    let elements = this.state.clients
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((post) => Frame(post));
    this.setState({ elements: elements });
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  };

  render() {
    let paginationElement;
    paginationElement = (
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={this.state.pageCount}
        forcePage={this.state.currentPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    );

    return (
      <div className="container-fluid" >
        <div className="row mt-3">{this.state.elements}</div>
        <div className="row mt-5 " id="navigation">{paginationElement}</div>
      </div>
    );
  }
}
