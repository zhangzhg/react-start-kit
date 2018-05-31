import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {Row, Col, ListGroupItem, Badge} from 'reactstrap';

class RowItem extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      eventName: PropTypes.string.isRequired,
      homeName: PropTypes.string.isRequired,
      awayName: PropTypes.string.isRequired,
    }),
    key:PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {eventName, homeName, awayName, homeScore, awayScore} = this.props.data;
    return (<ListGroupItem key={this.props.key}>
      <Row>
        <Col sm="2">
          {eventName}
        </Col>
        <Col sm="10" className="text-right">
          {homeName}
          <Badge color="secondary">{homeScore}</Badge>
          <span className="margin-10">~</span>
          {awayName}
          <Badge color="secondary">{awayScore}</Badge>
        </Col>
      </Row>
    </ListGroupItem>);
  }

}

export default withRouter(RowItem);
