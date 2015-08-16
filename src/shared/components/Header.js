import React, { PropTypes } from 'react';
import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

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
        <AppBar { ...this.props  }/>
    );
  }
}


