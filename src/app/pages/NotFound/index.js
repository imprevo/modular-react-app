import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <article>
                <h2>Page not found</h2>
                <p>Back to <Link to='/'>Main</Link>?</p>
            </article>
        );
    }
}

export default PageNotFound;
