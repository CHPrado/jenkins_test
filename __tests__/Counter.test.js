import React from "react";
import { mount } from 'enzyme';
import Counter from "../src/Counter";

describe('Testing Counter Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Counter count={5} />
    );

    expect(wrapper.debug()).toMatchSnapshot();
    wrapper.setProps({ count: 10*2 });
    expect(wrapper.debug()).toMatchSnapshot();
  });
});