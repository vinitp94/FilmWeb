import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav' id='footer'>
        <div id='left-half'>
          <p>Developed and designed by Vinit Parikh.</p>
        </div>

        <div id='right-half'>
          <p>Github and Linkedin go here.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
