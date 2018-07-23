import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Genre from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Genre />', () => {

  it('calls `changed` with correct Genre in checkbox change', () => {

    const props = {
      genre: {
        id: 1,
        checked: false
      },
      changed: jest.fn()
    };

    const wrapper = shallow(<Genre {...props} />);
    wrapper.find('input').simulate('change', { target: { checked: true } });

    expect(props.changed).toHaveBeenCalledWith({ id: 1, checked: true });
  });
});
