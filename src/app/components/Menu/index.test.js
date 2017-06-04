import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Menu from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
        <MemoryRouter>
            <Menu />
        </MemoryRouter>,
        div
    );
});
