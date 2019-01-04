import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>New York Times Search</h1>
          <form>
            <div className="form-group">
              <label for="searchTerm">Search Term: </label>
              <input type="text" className="form-control" id="searchTerm" />
            </div>
            <div className="form-group">
              <label for="startYear">Start Year (optional): </label>
              <input type="text" className="form-control" id="startYear" />
            </div>
            <div className="form-group">
              <label for="endYear">End Year (optional): </label>
              <input type="text" className="form-control" id="endYear" />
            </div>
            <div className="form-group">
              <label for="numberToReturn">Example select</label>
              <select className="form-control" id="numberToReturn">
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="container">
          <div class="card">
            <div className="card-header">Top Articles</div>
            <div className="card-body" id="articleResults" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
