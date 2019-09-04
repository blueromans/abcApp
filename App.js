import React, {Component} from 'react';
import {Root, StyleProvider} from 'native-base';
import {createAppContainer} from 'react-navigation';
import getTheme from './app/theme/components';
import platform from './app/theme/variables/platform';
import DefaultStack from './app/router';

const AppContainer = createAppContainer(DefaultStack);
console.disableYellowBox = true;
class App extends Component {
  constructor(properties) {
    super(properties);

  }
  render() {
    return (
        <Root>
            <StyleProvider style={getTheme(platform)}>
              <AppContainer/>
            </StyleProvider>
        </Root>
    );
  }
}
export default App;
