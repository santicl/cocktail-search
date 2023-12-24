import React, { Component } from "react";
import Portal from "../../Portal";
import Pepper from "./Pepper";


export default class PepperPopup extends Component {
    render() {
        const { toggleActive, PATH, show, cocktailItem, children} = this.props;
        
        return (
            <Portal>
                {

                    show && (
                        <Pepper PATH={PATH} toggleActive={toggleActive} cocktailItem={cocktailItem} />
                    )
                }
            </Portal>
        )
    }
}