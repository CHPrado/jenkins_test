import { mount } from 'enzyme';
import React from 'react';
import Counter from '../src/Counter';

describe('Testing Counter Component', () => {
    it('should render correctly', () => {
        const wrapper = mount(<Counter count={5} />);

        expect(wrapper.debug()).toMatchSnapshot();
        wrapper.setProps({ count: 10 * 4 });
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
