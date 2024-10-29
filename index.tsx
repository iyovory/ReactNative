/**
 * @format
 */

import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createRoot} from 'react-dom/client';
if (Platform.OS === 'web') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
} else {
  AppRegistry.registerComponent(appName, () => App);
}
