import React from 'react';

import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

class Basketball extends React.Component {
  static propTypes = {
    data:PropTypes.string
  }

  static defaultProps = {
    error: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> hello!!!!!!!!!!!!!!===={this.props.data}
      </div>
    );
  }
}


export default withRouter(Basketball);
