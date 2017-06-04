import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function MenuItem({ children, ...props }) {
    return (
        <li className="Menu__item">
            <NavLink className="Menu__link" activeClassName="active" {...props}>
                {children}
            </NavLink>
        </li>
    )
}

class Menu extends Component {
    render() {
        return (
            <menu className="Menu">
                <ul className="Menu__list">
                    <MenuItem exact to="/">Main</MenuItem>
                    <MenuItem exact to="/about">About</MenuItem>
                    <MenuItem to="/404">404</MenuItem>
                </ul>
            </menu>
        );
    }
}

export { MenuItem };
export default Menu;