import React, { Component } from 'react';

function asyncComponent(getComponent, Preloader = () => null) {
    return class AsyncComponent extends Component {
        static Component = null;
        static isMounted = false;

        componentWillMount() {
            if (!AsyncComponent.Component) {
                getComponent().then((component) => {
                    AsyncComponent.Component = component;

                    if (AsyncComponent.isMounted) {
                        this.forceUpdate();
                    }
                });
            }
        }

        componentDidMount() {
            AsyncComponent.isMounted = true;
        }

        componentWillUnmount() {
            AsyncComponent.isMounted = false;
        }

        render() {
            return (
                AsyncComponent.Component ?
                    <AsyncComponent.Component {...this.props} />
                    : <Preloader />
            );
        }
    }
}

export default asyncComponent;