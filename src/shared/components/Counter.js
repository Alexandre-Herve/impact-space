import React, { PropTypes } from 'react';
import Button from './Button';

export default class Counter {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <Button onClick={()=>increment()}>+</Button>
        {' '}
        <Button onClick={()=>decrement()}>-</Button>
        {' '}
        <Button onClick={()=>incrementIfOdd(counter)} secondary={ true }>
          Increment if odd
        </Button>
      </p>
    );
  }
}
