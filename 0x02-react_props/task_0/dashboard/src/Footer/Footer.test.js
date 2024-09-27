import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('<Footer />', () => {
	it('renders a div with the class App-footer', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.find('div.App-footer').exists()).toBe(true);
	  });
});
