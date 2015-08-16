import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Counter from '../components/Counter';
import LeftNav from '../components/LeftNav';
import Header from '../components/Header';
import * as actions from '../actions/counter';

@connect(state => ({
  counter: state.counter
}))
export default class CounterApp {
  render() {
    const { counter, dispatch } = this.props;
    const creators = bindActionCreators(actions, dispatch);
    return (
      <div>
        <LeftNav {...this.props}/>
        <Header {...this.props} title="Coucou"/>
        <Counter {...this.props} {...creators} />
      </div>
    );
  }
}

