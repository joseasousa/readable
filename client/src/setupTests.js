// Make Enzyme functions available in all test files without
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

Enzyme.configure({ adapter: new Adapter() });
global.localStorage = localStorageMock;
