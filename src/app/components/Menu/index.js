import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    static propTypes = {
        routeList: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string,
                title: PropTypes.string,
            })
        ),
    }

    static defaultProps = {
        routeList: [],
    }

    render() {
        const { routeList } = this.props;

        return (
            <menu className="Menu">
                <ul className="Menu__list">
                    {routeList.map(({ path, title }) => (
                        <MenuItem exact key={path} to={path}>{title}</MenuItem>
                    ))}
                </ul>
            </menu>
        );
    }
}

export { MenuItem };
export default Menu;