import React, { PropTypes } from 'react';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;

export default class Counter {
  static propTypes = {
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }


  render() {
    return (
        <RaisedButton { ...this.props  }/>
    );
  }
}

