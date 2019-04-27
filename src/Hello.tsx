import * as React from 'react';
import { HelloProps } from './app.interfaces';
import { FaBeer, FaRegThumbsUp } from 'react-icons/fa';

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <h1 className="welcome">
                <img src="./images/icon-home.png" alt="Home"/>
                Hello from {this.props.compiler} and {this.props.framework} and using react-icons! <FaBeer /> <FaRegThumbsUp />
            </h1>
        );
    }
}

export default Hello;