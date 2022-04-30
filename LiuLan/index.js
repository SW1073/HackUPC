/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AGCApp.getInstance().setClientId(0)

AppRegistry.registerComponent(appName, () => App);
