import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/stack', () => {});

Enzyme.configure({adapter: new Adapter()});
