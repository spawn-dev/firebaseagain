import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('firebaseagain', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('firebaseagain', { rootTag });
}
