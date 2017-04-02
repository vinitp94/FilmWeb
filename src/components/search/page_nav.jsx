import React from 'react';

class PageNav extends React.Component {
  constructor(props) {
    super(props);

  }

  renderButtons() {
    for (let i = 0; i < this.props.pages; i++) {

    }
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
