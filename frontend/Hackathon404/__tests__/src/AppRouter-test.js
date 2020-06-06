import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import AppNavigator from '../../src';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
fetch = jest.fn(() => Promise.resolve());

it('renders correctly', async () => {
  const container = renderer.create(<AppNavigator />);

  expect(container).toMatchSnapshot();
});
