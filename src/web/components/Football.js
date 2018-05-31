import React from 'react';

import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import RowItem from '../local-component/RowItem';
import {Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem} from 'reactstrap';
import classnames from 'classnames';

/**
 * 只负责 UI 的呈现，不带有任何业务逻辑
 * 没有状态（即不使用this.state这个变量）
 * 所有数据都由参数（this.props）提供
 * 不使用任何 Redux 的 API
 */
class Football extends React.Component {
  static propTypes = {
    data:PropTypes.array
  }

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(index) {
    this.setState({
      activeTab: index
    });
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Football
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Describe
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup>
              {data && data.map((item, key) => <RowItem data={item} key={key}/>)}
            </ListGroup>
          </TabPane>
          <TabPane tabId="2">
            this is list of football match. refresh a minute.
            show all matches of today, it contain teams and score.
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


export default withRouter(Football);
