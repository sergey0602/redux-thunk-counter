import React, { Component } from 'react';
import { changeCount, getInitialValue } from '../middlewares';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInitialValue();
  }

  increment() {
    this.props.changeCount('increment');
  }

  decrement() {
    this.props.changeCount('decrement');
  }

  render() {
    if (this.props.count !== null) {
      return (
        <div>
          <button type='button' onClick={this.increment.bind(this)}>Increment</button>
          <button type='button' onClick={this.decrement.bind(this)}>Decrement</button>
          <span>Result: {this.props.count}</span>
        </div>
      )
    } else {
      return (
        <div>Данные загружаются...</div>
      )
    }
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  changeCount: data => dispatch(changeCount(data)),
  getInitialValue: () => dispatch(getInitialValue())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
