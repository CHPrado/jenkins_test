import React from "react";
import { mount } from 'enzyme';
import App from "../src/App";

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
     <App />
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});