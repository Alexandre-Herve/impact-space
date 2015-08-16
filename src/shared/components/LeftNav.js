import React, { PropTypes } from 'react';
import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();
let LeftNav = mui.LeftNav;

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { 
     text: 'Disabled', 
     disabled: true 
  }
];

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
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} {...this.props} />
    );
  }
}


