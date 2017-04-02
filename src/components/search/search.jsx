import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      year: "",
      type: "",
      page: 1
    };
  }
  render() {
    return (
      <h1>Search</h1>
    );
  }
}

export default Search;
