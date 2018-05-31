import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getData } from '../actions/football';

/**
 * 负责管理数据和业务逻辑，不负责 UI 的呈现
 * 带有内部状态
 * 使用 Redux 的 API
 */
class Basketball extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    data:PropTypes.array
  }

  componentDidMount = () => this.props.getData();

  render = () => {
    const { data } = this.props;

    return <Layout data={data} />;
  }
}

//建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = state => ({
  data: state.data || {},
});

//用来建立 UI 组件的参数到store.dispatch方法的映射。
//也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
const mapDispatchToProps = {
  getData
};

//UI 组件生成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Basketball);
