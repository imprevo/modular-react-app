import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Menu, { MenuItem } from '../index';

describe('<Menu /> shallow', () => {
    it('render <Menu />', () => {
        const wrapper = shallow(
            <Menu />
        );
        expect(wrapper.find('.Menu').length).toEqual(1);
        expect(wrapper.find('.Menu__list').length).toEqual(1);
        expect(wrapper.find('.Menu__list').find(MenuItem).length).toEqual(3);
    });

    it('render <MenuItem />', () => {
        const wrapper = shallow(
            <MenuItem expect to={'/test'}>
                some text
            </MenuItem>
        );
        const link = wrapper.find('.Menu__link');

        expect(link.length).toEqual(1);
        expect(link.prop('expect')).toEqual(true);
        expect(link.prop('to')).toEqual('/test');
        expect(link.prop('children')).toEqual('some text');
    });
});

describe('<Menu /> mount', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        );
    });

    it('render', () => {
        expect(wrapper.find('.Menu').length).toEqual(1);
        expect(wrapper.find(MenuItem).length).toEqual(3);
        expect(wrapper.find(MenuItem).find('.Menu__link').length).toEqual(3);
    });

    it('click on links', () => {
        const links = wrapper.find(MenuItem).find('.Menu__link');

        function checkActivityLinks(active) {
            links.map((link, i) => {
                expect(link.hasClass('active')).toEqual(active === i);
            });
        }

        links.at(0).simulate('click', { button: 0 });
        checkActivityLinks(0);

        links.at(1).simulate('click', { button: 0 });
        checkActivityLinks(1);

        links.at(2).simulate('click', { button: 0 });
        checkActivityLinks(2);
    });
});

describe('<Menu /> snapshot', () => {
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});