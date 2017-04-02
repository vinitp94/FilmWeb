import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      year: "",
      type: "",
      page: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let s = this.state;
    this.props.searchMovies(s.title, s.year, s.type, s.page);
  }

  renderTypes() {
    const types = ['movie', 'series', 'episode'];

    return types.map(type => (
      <option key={type} value={type}>{type}</option>
    ));
  }

  render() {
    return (
      <div id='search-container'>
        <form id='search-form' onSubmit={ this.handleSubmit }>
          <label>Title:
            <input
              type='text'
              value={this.state.title}
              onChange={this.update('title')}
              autoFocus />
          </label>

          <label>Year:
            <input
              type='text'
              value={this.state.year}
              onChange={this.update('year')} />
          </label>

          <select
            type='text'
            value={this.state.category}
            onChange={this.update('type')}>
            <option value="" disabled selected>Type</option>
            { this.renderTypes() }
          </select>

          <input
            type='submit'
            value='Search' />
        </form>
      </div>
    );
  }
}

export default Search;
