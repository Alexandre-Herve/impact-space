import { UPDATE_COUNTER } from '../constants/ActionTypes';

export default function counter(init=0, {type, count}) {
  switch (type) {
    case UPDATE_COUNTER:
      return count;
    default:
      return init;
  }
}
