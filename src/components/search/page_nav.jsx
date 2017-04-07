import React from 'react';

class PageNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: 1 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: FIX BUG that 'currentpage' doesn't change on new search submit

  handleSubmit(e) {
    e.preventDefault();
    let newPage = e.currentTarget.innerHTML;
    this.setState({ currentPage: newPage });

    let s = this.props.searchData;
    this.props.searchMovies(s.title, s.year, s.type, newPage);
  }

  renderButtons() {
    let buttons = [];
    if (this.props.pages > 1) {
      for (let i = 0; i < this.props.pages; i++) {
        if (i + 1 === parseInt(this.state.currentPage)) {
          buttons.push(
            <button key={ i } id='current-page' onClick={ this.handleSubmit }>
              { i + 1 }
            </button>
          );
        } else {
          buttons.push(
            <button key={ i } onClick={ this.handleSubmit }>
              {i + 1}
            </button>
          );
        }
      }
    }
    return buttons;
  }

  render() {
    return (
      <div id="page-nav-container">
        <ul id='page-nav-list'>
          { this.renderButtons() }
        </ul>
      </div>
    );
  }
}

export default PageNav;
