import { mount } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('Testing App Component', () => {
    it('should render correctly', () => {
        const wrapper = mount(<App />);

        expect(wrapper.debug()).toMatchSnapshot();
    });
});
