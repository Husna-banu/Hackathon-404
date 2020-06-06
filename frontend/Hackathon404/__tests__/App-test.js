import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
fetch = jest.fn(() => Promise.resolve());

it('renders correctly', async () => {
  const container = renderer.create(<App />);

  expect(container).toMatchSnapshot();
});
