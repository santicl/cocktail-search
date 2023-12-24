import { Component } from "react";
import { createPortal } from "react-dom";

const modals = document.getElementById('modals');

export default class Portal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    
    componentDidMount() {
        modals.appendChild(this.el);
    }
    
    componentWillUnmount() {
        modals.removeChild(this.el);
    }
    
    render() {
        return createPortal(this.props.children, this.el);
    }
}