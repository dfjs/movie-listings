import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RatingFilter from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<RatingFilter />', () => {

  it('calls `changeRating` on input change', () => {
    
    const props = {
      rating: 3,
      changeRating: jest.fn()
    };
    
    const wrapper = shallow(<RatingFilter {...props} />);
    wrapper.find('input').simulate('change', { target: { value: '4' } });

    expect(props.changeRating).toHaveBeenCalledWith(4);
  });

  it('does not call `changeRating` on input change for non-number value', () => {

    const props = {
      rating: 3,
      changeRating: jest.fn()
    };

    const wrapper = shallow(<RatingFilter {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 'x' } });

    expect(props.changeRating).not.toHaveBeenCalled();
  });
});
