import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Login from '../../src/Login';
import {AccessProvider} from '../../src/utils/AppContext/loginContext';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
fetch = jest.fn(() => Promise.resolve());
const props = {
  navigate: jest.fn(),
  route: {
    params: {},
  },
};

it('renders correctly', async () => {
  const container = renderer.create(
    <AccessProvider>
      <Login {...props} />
    </AccessProvider>,
  );
  expect(container).toMatchSnapshot();
});
