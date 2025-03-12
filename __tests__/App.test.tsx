/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.

import ReactTestRenderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
